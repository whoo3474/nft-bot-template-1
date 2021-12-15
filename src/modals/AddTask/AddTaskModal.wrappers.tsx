import styled from "styled-components";
import { DarkCharcoal, OceanBlue, White } from "../../styles/Colors";

export const AddTaskModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  background-color: ${DarkCharcoal};
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  -webkit-app-region: drag;
`;

export const ToggleButtonWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) =>
    isSelected ? OceanBlue : DarkCharcoal};
  color: ${White};
  height: 36px;
  flex: 1;
  border-radius: 5px;
  font: 700 11px Montserrat;
  color: ${White};
  cursor: pointer;
  -webkit-app-region: none;
`;
