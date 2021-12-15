import { ComponentType, forwardRef, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { IconContainer } from "../pages/Pages.components";
import {
  DarkCharcoal,
  SilverChalice,
  SunsetOrange,
  Tuna,
  White,
} from "../styles/Colors";
import {
  ModalButtonWrapper,
  ModalGroupWrapper,
  ModalInputWithTitleWrapper,
  ModalSelectWrapper,
} from "./Modal.wrappers";

export const Modal = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${White}1a;
  border-radius: 10px;
`;

export const BlurBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  -webkit-app-region: drag;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: ${Tuna};
  padding-left: 30px;

  .modal-title {
    font: 700 14px Montserrat;
    color: ${White};
  }

  .close-modal-button {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${SunsetOrange};
    cursor: pointer;
    -webkit-app-region: none;
  }

  .close-modal-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 10px;
    padding-right: 10px;
  }
`;

export const ModalInputWithTitle = forwardRef<
  HTMLInputElement,
  { title: string; placeholder: string }
>(({ title, placeholder }, ref) => (
  <ModalInputWithTitleWrapper>
    <div className="input-title">{title}</div>
    <input
      className="modal-input"
      type="text"
      placeholder={placeholder}
      spellCheck={false}
      ref={ref}
    />
  </ModalInputWithTitleWrapper>
));

export const ModalSelect = forwardRef<
  HTMLSelectElement,
  { title: string; placeholder: string; values: string[] }
>(({ title, placeholder, values }, ref) => (
  <ModalSelectWrapper>
    <div className="select-title">{title}</div>
    <select ref={ref}>
      <option value={placeholder} hidden>
        {placeholder}
      </option>
      {values.map((v) => (
        <option value={v}>{v}</option>
      ))}
    </select>
  </ModalSelectWrapper>
));

export const ModalColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex: 1;
`;

export const ModalRow = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const ModalBody = styled.div`
  display: flex;
  column-gap: 15px;
  flex: 1;
  padding: 15px 30px 15px 30px;
`;

export const ModalGroup = ({ children }: { children: ReactNode }) => (
  <ModalGroupWrapper>{children}</ModalGroupWrapper>
);

export const ModalInput = styled.input`
  background-color: ${DarkCharcoal};
  font: 700 11px Montserrat;
  color: ${White};
  height: 36px;
  border-radius: 5px;
  border: none;
  outline: none;
  -webkit-app-region: none;
  text-align: center;
  min-width: 0;
  flex: 1;

  ::placeholder {
    color: ${SilverChalice};
  }
`;

export const ModalButton = ({
  text,
  ButtonIcon,
  onClick,
}: {
  text: string;
  ButtonIcon: ComponentType;
  onClick: MouseEventHandler;
}) => (
  <ModalButtonWrapper onClick={onClick}>
    <div>{text}</div>
    <IconContainer size="24px" color="#FFFFFF14">
      <ButtonIcon />
    </IconContainer>
  </ModalButtonWrapper>
);

export const ModalFooter = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: end;
  margin-bottom: 30px;
  margin-right: 30px;
`;
