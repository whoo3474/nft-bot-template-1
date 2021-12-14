import { ComponentType, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DarkCharcoal,
  MediumSlateBlue,
  Onyx,
  RaisinBlack,
  ScreaminGreen,
  SilverChalice,
  White,
} from "../../styles/Colors";
import {
  SideNavigationButtonWrapper,
  WindowButtonsWrapper,
} from "./ApplicationLayout.wrappers";

export const SideNavigation = styled.div`
  background-color: ${RaisinBlack};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 16px 24px 24px;
  margin: 15px 0px 15px 15px;
`;

export const WindowButtons = ({
  closeOnClick,
  minimizeOnClick,
}: {
  closeOnClick: MouseEventHandler;
  minimizeOnClick: MouseEventHandler;
}) => (
  <WindowButtonsWrapper>
    <div onClick={closeOnClick} className="button close" />
    <div onClick={minimizeOnClick} className="button minimize" />
  </WindowButtonsWrapper>
);

export const SideNavigationHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-bottom: 25px;

  .bot-name {
    font: 400 18px Montserrat;
    color: ${White};
  }
`;

export const SideNavigationButton = ({
  to,
  ButtonIcon,
  buttonText,
  currentPathname,
}: {
  to: string;
  ButtonIcon: ComponentType<{ isCurrentPage: boolean }>;
  buttonText: string;
  currentPathname: string;
}) => (
  <SideNavigationButtonWrapper isCurrentPage={to === currentPathname}>
    <Link to={to} tabIndex={-1}>
      <ButtonIcon isCurrentPage={to === currentPathname} />
      <div className="text">{buttonText}</div>
    </Link>
  </SideNavigationButtonWrapper>
);

export const SideNavigationTools = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  .tools-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font: 400 9px Montserrat;
      color: ${SilverChalice};
    }

    .last-block {
      display: flex;
      column-gap: 5px;

      div:first-child {
        font: 700 9px Montserrat;
        color: ${SilverChalice};

        ::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 6px;
          background-color: ${ScreaminGreen};
          margin-right: 5px;
        }
      }

      div:last-child {
        font: 400 9px Montserrat;
        color: ${White};
      }
    }
  }
`;

export const GasTracker = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DarkCharcoal};
  border-radius: 5px;
  overflow: hidden;

  .gas-tracker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 6px;
    background-color: ${Onyx};
    height: 36px;

    .gas-tracker-title {
      font: 400 12px Montserrat;
      color: ${SilverChalice};
    }
  }

  .tracker-values {
    display: flex;
    align-items: center;
    padding-left: 18px;
    height: 36px;
    column-gap: 6px;

    div:first-child {
      font: 400 12px Montserrat;
      color: ${White};
    }

    div:last-child {
      font: 400 12px Montserrat;
      color: ${MediumSlateBlue};
    }
  }
`;
