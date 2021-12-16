import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { CopyIcon, PencilIcon, PlusIcon } from "../../pages/Pages.components";
import {
  BlurBackdrop,
  Modal,
  ModalBody,
  ModalButton,
  ModalColumn,
  ModalColumnFixed,
  ModalFooter,
  ModalGroup,
  ModalHeader,
  ModalInput,
  ModalInputWithTitle,
  ModalInputWithTitleAndButton,
  ModalSelect,
  ModalValueDisplay,
  ToggleButton,
} from "../Modal.components";
import { ManageTaskModalWrapper } from "./ManageTaskModal.wrappers";

export const ManageTaskModalContext = createContext<{
  showManageTaskModal: () => void;
}>({
  showManageTaskModal: () => undefined,
});

export function useManageTaskModalContext() {
  return useContext(ManageTaskModalContext);
}

export const ManageTaskModal = ({ children }: { children: ReactNode }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isGasPriceRapid1, setGasPriceRapid1] = useState(true);
  const [isGasPriceRapid2, setGasPriceRapid2] = useState(false);
  const [isGasPriceRapid3, setGasPriceRapid3] = useState(false);
  const [isGasLimitAuto, setGasLimitAuto] = useState(true);
  const [isGasLimitManual, setGasLimitManual] = useState(false);

  const transcationCost = useRef<HTMLInputElement>(null);
  const contractAdress = useRef<HTMLInputElement>(null);
  const functionName = useRef<HTMLInputElement>(null);
  const functionParameters = useRef<HTMLInputElement>(null);
  const gasLimit = useRef<HTMLInputElement>(null);

  return (
    <ManageTaskModalContext.Provider
      value={{ showManageTaskModal: () => setModalVisible(true) }}
    >
      {children}
      {isModalVisible && (
        <Modal>
          <BlurBackdrop onClick={() => setModalVisible(false)} />
          <ManageTaskModalWrapper>
            <ModalHeader>
              <div className="modal-title">Manage Task</div>
              <div className="close-modal-container">
                <div
                  className="close-modal-button"
                  onClick={() => setModalVisible(false)}
                />
              </div>
            </ModalHeader>
            <ModalBody>
              <ModalColumn>
                <ModalValueDisplay title="Current Tasks" value="1" />
                <ModalInputWithTitleAndButton
                  title="Mass Updated Transaction Cost"
                  placeholder="Enter Transaction Cost"
                  ButtonIcon={PencilIcon}
                  onClick={() => {}}
                />
              </ModalColumn>
              <ModalColumn>
                <ModalSelect title="Wallet" placeholder="Wallet" values={[]} />
                <ModalSelect
                  title="Transcation Network"
                  placeholder="Transcation Network"
                  values={[]}
                />
                <ModalInputWithTitle
                  ref={transcationCost}
                  title="Transcation Cost"
                  placeholder="Transaction Cost"
                />
                <ModalInputWithTitle
                  ref={contractAdress}
                  title="Contract Adress"
                  placeholder="Contract Adress"
                />
                <ModalInputWithTitle
                  ref={functionName}
                  title="Function Name"
                  placeholder="Function Name"
                />
                <ModalInputWithTitle
                  ref={functionParameters}
                  title="Function Parameters"
                  placeholder="Function Parameters (seperated by commas)"
                />
              </ModalColumn>
              <ModalColumnFixed width="145px">
                <ModalGroup marginTop="21px">
                  <div className="group-title">Gas Price Method</div>
                  <ModalColumn>
                    <ToggleButton
                      text="Rapid Price"
                      isSelected={isGasPriceRapid1}
                      onClick={() => {
                        setGasPriceRapid1(true);
                        setGasPriceRapid2(false);
                        setGasPriceRapid3(false);
                      }}
                    />
                    <ToggleButton
                      text="Rapid Price"
                      isSelected={isGasPriceRapid2}
                      onClick={() => {
                        setGasPriceRapid1(false);
                        setGasPriceRapid2(true);
                        setGasPriceRapid3(false);
                      }}
                    />
                    <ToggleButton
                      text="Rapid Price"
                      isSelected={isGasPriceRapid3}
                      onClick={() => {
                        setGasPriceRapid1(false);
                        setGasPriceRapid2(false);
                        setGasPriceRapid3(true);
                      }}
                    />
                  </ModalColumn>
                </ModalGroup>
                <ModalGroup>
                  <div className="group-title">Gas Limit Method</div>
                  <ModalColumn>
                    <ToggleButton
                      text="Auto"
                      isSelected={isGasLimitAuto}
                      onClick={() => {
                        setGasLimitAuto(true);
                        setGasLimitManual(false);
                      }}
                    />
                    <ToggleButton
                      text="Manually"
                      isSelected={isGasLimitManual}
                      onClick={() => {
                        setGasLimitAuto(false);
                        setGasLimitManual(true);
                      }}
                    />
                    <ModalInput
                      placeholder="Enter Limit"
                      ref={gasLimit}
                      spellCheck={false}
                      disabled={!isGasLimitManual}
                    />
                  </ModalColumn>
                </ModalGroup>
              </ModalColumnFixed>
            </ModalBody>
            <ModalFooter>
              <ModalButton
                text="Edit Tasks"
                ButtonIcon={PlusIcon}
                onClick={() => {}}
              />
              <ModalButton
                text="Duplicate"
                ButtonIcon={CopyIcon}
                onClick={() => {}}
              />
            </ModalFooter>
          </ManageTaskModalWrapper>
        </Modal>
      )}
    </ManageTaskModalContext.Provider>
  );
};
