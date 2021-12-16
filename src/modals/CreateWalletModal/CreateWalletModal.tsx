import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { CrossIcon, PlusIcon } from "../../pages/Pages.components";
import {
  BlurBackdrop,
  Modal,
  ModalBody,
  ModalButton,
  ModalColumn,
  ModalFooter,
  ModalHeader,
  ModalInputWithTitle,
} from "../Modal.components";
import { CreateWalletModalWrapper } from "./CreateWalletModal.wrappers";

export const CreateWalletModalContext = createContext<{
  showCreateWalletModal: () => void;
}>({
  showCreateWalletModal: () => undefined,
});

export function useCreateWalletModalContext() {
  return useContext(CreateWalletModalContext);
}

export const CreateWalletModal = ({ children }: { children: ReactNode }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const walletNickname = useRef<HTMLInputElement>(null);
  const walletPrivateKey = useRef<HTMLInputElement>(null);

  return (
    <CreateWalletModalContext.Provider
      value={{ showCreateWalletModal: () => setModalVisible(true) }}
    >
      {children}
      {isModalVisible && (
        <Modal>
          <BlurBackdrop onClick={() => setModalVisible(false)} />
          <CreateWalletModalWrapper>
            <ModalHeader>
              <div className="modal-title">Create Wallet</div>
              <div className="close-modal-container">
                <div
                  className="close-modal-button"
                  onClick={() => setModalVisible(false)}
                />
              </div>
            </ModalHeader>
            <ModalBody>
              <ModalColumn>
                <ModalInputWithTitle
                  ref={walletNickname}
                  title="Wallet Address"
                  placeholder="Enter Address"
                />
                <ModalInputWithTitle
                  ref={walletPrivateKey}
                  title="Wallet Private Key"
                  placeholder="Enter Private Key"
                />
              </ModalColumn>
            </ModalBody>
            <ModalFooter>
              <ModalButton
                text="Cancel"
                ButtonIcon={CrossIcon}
                onClick={() => setModalVisible(false)}
              />
              <ModalButton
                text="Create Wallet"
                ButtonIcon={PlusIcon}
                onClick={() => {}}
              />
            </ModalFooter>
          </CreateWalletModalWrapper>
        </Modal>
      )}
    </CreateWalletModalContext.Provider>
  );
};
