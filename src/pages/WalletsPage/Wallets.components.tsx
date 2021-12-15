import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { DarkCharcoal } from "../../styles/Colors";
import {
  ExportIcon2,
  IconContainer,
  PlayIconGrey,
  TrashIconGrey,
  WalletIcon2,
} from "../Pages.components";
import { WalletsActionGroupWrapper, WalletWrapper } from "./Wallest.wrappers";

export const WalletsActionGroup = ({
  groupTitle,
  children,
}: {
  groupTitle: string;
  children: ReactNode;
}) => (
  <WalletsActionGroupWrapper>
    <div className="group-title">{groupTitle}</div>
    <div className="actions">{children}</div>
  </WalletsActionGroupWrapper>
);

export const WalletList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 622px;
  -webkit-app-region: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wallet = ({
  name,
  balance,
  address,
  onStartClick,
  onDeleteClick,
  onExportClick,
  isCheckingBalance,
}: {
  name: string;
  balance: number;
  address: string;
  onStartClick: MouseEventHandler;
  onDeleteClick: MouseEventHandler;
  onExportClick: MouseEventHandler;
  isCheckingBalance: boolean;
}) => (
  <WalletWrapper>
    <div className="name">
      <WalletIcon2 />
      <div>{name}</div>
    </div>
    <div className="body">
      <div className="balance">
        <div>Balance: </div>
        {isCheckingBalance ? (
          <div className="checking-balance">Checking Balance</div>
        ) : (
          <div className="eth">{balance} ETH</div>
        )}
      </div>
      <div className="actions">
        <IconContainer
          className="button"
          size="26px"
          color={DarkCharcoal}
          onClick={onStartClick}
        >
          <PlayIconGrey />
        </IconContainer>
        <IconContainer
          className="button"
          size="26px"
          color={DarkCharcoal}
          onClick={onDeleteClick}
        >
          <TrashIconGrey />
        </IconContainer>
        <IconContainer
          className="button"
          size="26px"
          color={DarkCharcoal}
          onClick={onExportClick}
        >
          <ExportIcon2 />
        </IconContainer>
      </div>
    </div>
    <div className="address">{address}</div>
  </WalletWrapper>
);
