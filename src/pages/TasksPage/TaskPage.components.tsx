import { forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";
import { OceanBlue } from "../../styles/Colors";
import {
  GasIcon,
  IconContainer,
  RefreshWithCheckIcon,
} from "../Pages.components";
import { GweiInputWrapper } from "./TaskPage.wrappers";

export const TaskHeaders = styled.div`
  display: flex;
  height: 32px;
  background-color: ${OceanBlue};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const GweiInput = forwardRef<
  HTMLInputElement,
  { onRefreshClick: MouseEventHandler; isGweiCheckVisible: boolean }
>(({ onRefreshClick, isGweiCheckVisible }, ref) => (
  <GweiInputWrapper>
    <IconContainer size="26px" color="#FFFFFF24">
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
      color="#FFFFFF24"
    >
      <RefreshWithCheckIcon isCheckVisible={isGweiCheckVisible} />
    </IconContainer>
  </GweiInputWrapper>
));
