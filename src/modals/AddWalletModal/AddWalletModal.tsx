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
import { AddWalletModalWrapper } from "./AddWalletModal.wrappers";

export const AddWalletModalContext = createContext<{
  showAddWalletModal: () => void;
}>({
  showAddWalletModal: () => undefined,
});

export function useAddWalletModalContext() {
  return useContext(AddWalletModalContext);
}

export const AddWalletModal = ({ children }: { children: ReactNode }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const walletNickname = useRef<HTMLInputElement>(null);
  const walletPrivateKey = useRef<HTMLInputElement>(null);

  return (
    <AddWalletModalContext.Provider
      value={{ showAddWalletModal: () => setModalVisible(true) }}
    >
      {children}
      {isModalVisible && (
        <Modal>
          <BlurBackdrop />
          <AddWalletModalWrapper>
            <ModalHeader>
              <div className="modal-title">Add Wallet</div>
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
                  title="Wallet Nickname"
                  placeholder="Enter Nickname"
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
                text="Add Wallet"
                ButtonIcon={PlusIcon}
                onClick={() => {}}
              />
            </ModalFooter>
          </AddWalletModalWrapper>
        </Modal>
      )}
    </AddWalletModalContext.Provider>
  );
};
