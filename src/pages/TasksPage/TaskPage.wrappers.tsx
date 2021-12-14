import styled from "styled-components";
import { OceanBlue, White } from "../../styles/Colors";

export const GweiInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: ${OceanBlue};
  border: 1px solid ${White}42;
  border-radius: 5px;
  padding: 0px 5px;

  .gwei-input {
    flex: 1;
    height: 36px;
    text-align: center;
    background: none;
    outline: none;
    border: none;
    -webkit-app-region: none;
    font: 400 11px Montserrat;
    color: ${White};

    ::placeholder {
      color: ${White};
    }
  }

  .refresh-button {
    cursor: pointer;
    -webkit-app-region: none;
  }
`;
