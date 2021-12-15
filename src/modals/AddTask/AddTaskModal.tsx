import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { CrossIcon, PlusIcon } from "../../pages/Pages.components";
import {
  BlurBackdrop,
  Modal,
  ModalBody,
  ModalButton,
  ModalColumn,
  ModalFooter,
  ModalGroup,
  ModalHeader,
  ModalInput,
  ModalInputWithTitle,
  ModalRow,
  ModalSelect,
} from "../Modal.components";
import { ToggleButton } from "./AddTaskModal.components";
import { AddTaskModalWrapper } from "./AddTaskModal.wrappers";

export const AddTaskModalContext = createContext<{
  showAddTaskModal: () => void;
}>({
  showAddTaskModal: () => undefined,
});

export function useAddTaskModalContext() {
  return useContext(AddTaskModalContext);
}

export const AddTaskModal = ({ children }: { children: ReactNode }) => {
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
    <AddTaskModalContext.Provider
      value={{ showAddTaskModal: () => setModalVisible(true) }}
    >
      {children}
      {isModalVisible && (
        <Modal>
          <BlurBackdrop />
          <AddTaskModalWrapper>
            <ModalHeader>
              <div className="modal-title">Add Task</div>
              <div className="close-modal-container">
                <div
                  className="close-modal-button"
                  onClick={() => setModalVisible(false)}
                />
              </div>
            </ModalHeader>
            <ModalBody>
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
              <ModalColumn>
                <ModalGroup>
                  <div className="group-title">Gas Price Method</div>
                  <ModalRow>
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
                  </ModalRow>
                  <div className="group-footer">
                    Send rapid gas price (displayed at the bottom left corner)
                  </div>
                </ModalGroup>
                <ModalGroup>
                  <div className="group-title">Gas Limit Method</div>
                  <ModalRow>
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
                  </ModalRow>
                </ModalGroup>
              </ModalColumn>
            </ModalBody>
            <ModalFooter>
              <ModalButton
                text="Cancel"
                ButtonIcon={CrossIcon}
                onClick={() => setModalVisible(false)}
              />
              <ModalButton
                text="Add Task"
                ButtonIcon={PlusIcon}
                onClick={() => {}}
              />
            </ModalFooter>
          </AddTaskModalWrapper>
        </Modal>
      )}
    </AddTaskModalContext.Provider>
  );
};
