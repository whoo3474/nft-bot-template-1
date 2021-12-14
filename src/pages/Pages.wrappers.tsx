import styled from "styled-components";
import { OceanBlue, White } from "../styles/Colors";

export const ActionGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .group-title {
    font: 700 11px Montserrat;
    color: ${White}8A;
    margin-left: 12px;
  }

  .actions {
    display: flex;
    column-gap: 8px;
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 10px;
  height: 36px;
  min-width: 115px;
  cursor: pointer;
  -webkit-app-region: none;
  background-color: ${OceanBlue};
  border-radius: 5px;

  .button-text {
    font: 700 11px Montserrat;
    color: ${White};
    margin-right: 15px;
  }
`;
