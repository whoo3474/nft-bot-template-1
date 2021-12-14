import styled from "styled-components";
import {
  DarkCharcoal,
  Jet,
  MintGreen,
  OceanBlue,
  VioletsAreBlue,
  White,
} from "../../styles/Colors";
import { TaskStatus } from "./TaskPage.components";

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

export const TaskRowWrapper = styled.div<{ taskStatus: TaskStatus }>`
  display: flex;
  align-items: center;
  min-height: 36px;
  background-color: ${Jet};
  border-radius: 5px;
  padding-left: 5px;
  font: 400 11px Montserrat;
  color: ${White};

  .id {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: ${DarkCharcoal};
    border-radius: 3px;
  }

  .contract {
    margin-left: auto;
    width: 255px;
  }

  .network {
    width: 133px;
  }

  .wallet {
    width: 212px;
  }

  .status {
    width: 264px;
    color: ${({ taskStatus }) =>
      taskStatus === TaskStatus.Waiting ? VioletsAreBlue : MintGreen};
  }

  .actions {
    display: flex;
    column-gap: 5px;
    width: 65px;

    .button {
      cursor: pointer;
    }
  }
`;
