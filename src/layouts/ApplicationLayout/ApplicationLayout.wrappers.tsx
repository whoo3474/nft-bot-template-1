import styled from "styled-components";
import {
  DarkCharcoal,
  OceanBlue,
  SilverChalice,
  SunGlow,
  SunsetOrange,
  White,
} from "../../styles/Colors";

export const ApplicationLayoutWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${DarkCharcoal};
  border-radius: 10px;
  display: flex;
`;

export const WindowButtonsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 15px;

  .button {
    width: 12px;
    height: 12px;
    border-radius: 12px;
    -webkit-app-region: none;
    cursor: pointer;
  }

  .close {
    background-color: ${SunsetOrange};
  }

  .minimize {
    background-color: ${SunGlow};
  }
`;

export const SideNavigationButtonWrapper = styled.div<{
  isCurrentPage: boolean;
}>`
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? OceanBlue : DarkCharcoal};
  border-radius: 5px;
  .text {
    font: 400 12px Montserrat;
    color: ${({ isCurrentPage }) => (isCurrentPage ? White : SilverChalice)};
  }
`;
