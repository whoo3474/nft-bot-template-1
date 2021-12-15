import styled from "styled-components";
import ArrowDown from "../assets/images/arrow-down.png";
import { Jet, OceanBlue, SilverChalice, White } from "../styles/Colors";

export const ModalInputWithTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .input-title {
    font: 500 9px Montserrat;
    color: ${SilverChalice};
    margin-bottom: 10px;
  }

  .modal-input {
    padding-left: 15px;
    font: 700 11px Montserrat;
    color: ${White};
    background-color: ${Jet};
    height: 36px;
    border-radius: 5px;
    border: none;
    outline: none;
    -webkit-app-region: none;

    ::placeholder {
      color: ${SilverChalice};
    }
  }
`;

export const ModalSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .select-title {
    font: 500 9px Montserrat;
    color: ${SilverChalice};
    margin-bottom: 10px;
  }

  select {
    font: 700 11px Montserrat;
    color: ${White};
    -webkit-app-region: none;
    background-color: ${Jet};
    border: none;
    outline: none;
    height: 36px;
    border-radius: 5px;
    padding-left: 11px;
    -webkit-appearance: none;
    background: url(${ArrowDown}) no-repeat 350px, ${Jet};
  }
`;

export const ModalGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Jet};
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 21px;
  margin-bottom: -21px;

  .group-title {
    font: 500 9px Montserrat;
    color: ${SilverChalice};
    margin-bottom: 15px;
  }

  .group-footer {
    margin-top: 15px;
    font: 500 9px Montserrat;
    color: ${SilverChalice};
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  width: 139px;
  background-color: ${OceanBlue};
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 7px;
  font: 700 11px Montserrat;
  color: ${White};
  cursor: pointer;
  -webkit-app-region: none;
`;
