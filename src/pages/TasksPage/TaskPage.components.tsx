import { forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";
import { DarkCharcoal, OceanBlue, White } from "../../styles/Colors";
import {
  GasIcon,
  IconContainer,
  PlayIconGrey,
  RefreshWithCheckIcon,
  TrashIconGrey,
} from "../Pages.components";
import { GweiInputWrapper, TaskRowWrapper } from "./TaskPage.wrappers";

export const TasksColumnHeaders = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  background-color: ${OceanBlue};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font: 400 9px Montserrat;
  color: ${White};
  margin-bottom: 10px;

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
  }

  .actions {
    width: 65px;
  }
`;

export enum TaskStatus {
  Waiting,
  Successful,
}

export const TaskRow = ({
  id,
  contract,
  network,
  wallet,
  status,
  onStartClick,
  onDeleteClick,
}: {
  id: string;
  contract: string;
  network: string;
  wallet: string;
  status: TaskStatus;
  onStartClick: MouseEventHandler;
  onDeleteClick: MouseEventHandler;
}) => (
  <TaskRowWrapper taskStatus={status}>
    <div className="id">{id}</div>
    <div className="contract">{contract}</div>
    <div className="network">{network}</div>
    <div className="wallet">{wallet}</div>
    <div className="status">
      {status === TaskStatus.Waiting
        ? "Waiting for Drop"
        : "Successfully Purchased NFT"}
    </div>
    <div className="actions">
      <IconContainer className="button" size="26px" color={DarkCharcoal}>
        <PlayIconGrey />
      </IconContainer>
      <IconContainer className="button" size="26px" color={DarkCharcoal}>
        <TrashIconGrey />
      </IconContainer>
    </div>
  </TaskRowWrapper>
);

export const GweiInput = forwardRef<
  HTMLInputElement,
  { onRefreshClick: MouseEventHandler; isGweiCheckVisible: boolean }
>(({ onRefreshClick, isGweiCheckVisible }, ref) => (
  <GweiInputWrapper>
    <IconContainer size="26px" color={`${White}24`}>
      <GasIcon />
    </IconContainer>
    <input
      className="gwei-input"
      type="text"
      placeholder="Enter Gas ( GWEI )"
      spellCheck={false}
      ref={ref}
    />
    <IconContainer
      className="refresh-button"
      onClick={onRefreshClick}
      size="26px"
      color={`${White}24`}
    >
      <RefreshWithCheckIcon isCheckVisible={isGweiCheckVisible} />
    </IconContainer>
  </GweiInputWrapper>
));

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  -webkit-app-region: none;
  max-height: 588px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
