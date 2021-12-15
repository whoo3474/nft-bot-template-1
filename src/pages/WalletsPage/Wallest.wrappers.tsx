import styled from "styled-components";
import {
  Jet,
  OceanBlue,
  Onyx,
  SilverChalice,
  Tuna,
  VioletsAreBlue,
  White,
} from "../../styles/Colors";

export const WalletsActionGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex: 1;

  .group-title {
    font: 700 11px Montserrat;
    color: ${White}8A;
    margin-left: 12px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }

  .sub-group {
    display: flex;
    column-gap: 8px;
  }
`;

export const WalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Jet};
  border-radius: 5px;
  overflow: hidden;
  height: 148px;
  width: 325px;

  .name {
    display: flex;
    column-gap: 10px;
    align-items: center;
    font: 700 11px Montserrat;
    padding-left: 16px;
    color: ${White};
    height: 36px;
    background-color: ${Tuna};
  }

  .body {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    padding: 0px 20px;

    .balance {
      font: 700 11px Montserrat;

      div:first-child {
        color: ${SilverChalice};
      }

      .eth {
        color: ${White};
      }

      .checking-balance {
        color: ${VioletsAreBlue};
      }
    }

    .actions {
      display: flex;
      column-gap: 5px;

      .button {
        cursor: pointer;
      }
    }
  }

  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    font: 700 11px Montserrat;
    color: ${White};
    height: 36px;
    background-color: ${OceanBlue};
  }
`;
