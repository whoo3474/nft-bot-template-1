import { ComponentType, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BattleshipGrey,
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
} from "./ApplicationLayout.wrapper";

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

export const BotIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36" height="36" rx="6" fill="#4E44CE" />
  </svg>
);

export const SideNavigationButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: auto;

  .dashboard-title {
    font: 400 9px Montserrat;
    color: ${SilverChalice};
  }

  a {
    display: flex;
    column-gap: 10px;
    align-items: center;
    height: 36px;
    padding-left: 14px;
    cursor: pointer;
    -webkit-app-region: none;
    text-decoration: none;
    outline: none;
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

export const TasksIcon = ({ isCurrentPage }: { isCurrentPage: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.02032 0.632568H1.12236C0.992462 0.632568 0.867881 0.684172 0.776026 0.776026C0.684172 0.867881 0.632568 0.992462 0.632568 1.12236V6.02032C0.632568 6.15023 0.684172 6.27481 0.776026 6.36666C0.867881 6.45852 0.992462 6.51012 1.12236 6.51012H6.02032C6.15023 6.51012 6.27481 6.45852 6.36666 6.36666C6.45852 6.27481 6.51012 6.15023 6.51012 6.02032V1.12236C6.51012 0.992462 6.45852 0.867881 6.36666 0.776026C6.27481 0.684172 6.15023 0.632568 6.02032 0.632568ZM12.8775 0.632568H7.97951C7.8496 0.632568 7.72502 0.684172 7.63317 0.776026C7.54131 0.867881 7.48971 0.992462 7.48971 1.12236V6.02032C7.48971 6.15023 7.54131 6.27481 7.63317 6.36666C7.72502 6.45852 7.8496 6.51012 7.97951 6.51012H12.8775C13.0074 6.51012 13.1319 6.45852 13.2238 6.36666C13.3157 6.27481 13.3673 6.15023 13.3673 6.02032V1.12236C13.3673 0.992462 13.3157 0.867881 13.2238 0.776026C13.1319 0.684172 13.0074 0.632568 12.8775 0.632568ZM6.02032 7.48971H1.12236C0.992462 7.48971 0.867881 7.54131 0.776026 7.63317C0.684172 7.72502 0.632568 7.8496 0.632568 7.97951V12.8775C0.632568 13.0074 0.684172 13.1319 0.776026 13.2238C0.867881 13.3157 0.992462 13.3673 1.12236 13.3673H6.02032C6.15023 13.3673 6.27481 13.3157 6.36666 13.2238C6.45852 13.1319 6.51012 13.0074 6.51012 12.8775V7.97951C6.51012 7.8496 6.45852 7.72502 6.36666 7.63317C6.27481 7.54131 6.15023 7.48971 6.02032 7.48971ZM12.8775 7.48971H7.97951C7.8496 7.48971 7.72502 7.54131 7.63317 7.63317C7.54131 7.72502 7.48971 7.8496 7.48971 7.97951V12.8775C7.48971 13.0074 7.54131 13.1319 7.63317 13.2238C7.72502 13.3157 7.8496 13.3673 7.97951 13.3673H12.8775C13.0074 13.3673 13.1319 13.3157 13.2238 13.2238C13.3157 13.1319 13.3673 13.0074 13.3673 12.8775V7.97951C13.3673 7.8496 13.3157 7.72502 13.2238 7.63317C13.1319 7.54131 13.0074 7.48971 12.8775 7.48971Z"
      fill-opacity="0.9"
      fill={isCurrentPage ? White : BattleshipGrey}
    />
  </svg>
);

export const WalletsIcon = ({ isCurrentPage }: { isCurrentPage: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.66663 0.666693C1.56998 0.666693 0.666626 1.57005 0.666626 2.66669V13.3334C0.666626 14.438 1.56196 15.3334 2.66663 15.3334H14C14.7366 15.3334 15.3333 14.7367 15.3333 14V4.66669C15.3333 3.93003 14.7366 3.33336 14 3.33336H8.66663H2.66663C2.28994 3.33336 1.99996 3.04338 1.99996 2.66669C1.99996 2.29001 2.28994 2.00003 2.66663 2.00003H12.6666C12.755 2.00127 12.8427 1.98495 12.9247 1.95201C13.0066 1.91907 13.0812 1.87016 13.1442 1.80813C13.2071 1.7461 13.257 1.67219 13.2911 1.59068C13.3252 1.50918 13.3428 1.42171 13.3428 1.33336C13.3428 1.24501 13.3252 1.15754 13.2911 1.07604C13.257 0.994531 13.2071 0.920615 13.1442 0.858586C13.0812 0.796556 13.0066 0.747649 12.9247 0.714707C12.8427 0.681764 12.755 0.665443 12.6666 0.666693H2.66663ZM12.6666 8.00002C13.4033 8.00002 14 8.59669 14 9.33336C14 10.07 13.4033 10.6667 12.6666 10.6667C11.93 10.6667 11.3333 10.07 11.3333 9.33336C11.3333 8.59669 11.93 8.00002 12.6666 8.00002Z"
      fill={isCurrentPage ? White : BattleshipGrey}
    />
  </svg>
);

export const SettingsIcon = ({ isCurrentPage }: { isCurrentPage: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3016 9.18512C14.5699 9.32762 14.7768 9.55262 14.9225 9.77762C15.2061 10.2426 15.1831 10.8126 14.9071 11.3151L14.3706 12.2151C14.087 12.6951 13.5582 12.9951 13.014 12.9951C12.7457 12.9951 12.4468 12.9201 12.2015 12.7701C12.0022 12.6426 11.7723 12.5976 11.527 12.5976C10.7682 12.5976 10.1321 13.2201 10.1091 13.9626C10.1091 14.8251 9.40391 15.5001 8.52247 15.5001H7.48007C6.59097 15.5001 5.88582 14.8251 5.88582 13.9626C5.87049 13.2201 5.23432 12.5976 4.47552 12.5976C4.22258 12.5976 3.99264 12.6426 3.80102 12.7701C3.55575 12.9201 3.24917 12.9951 2.98857 12.9951C2.43671 12.9951 1.90785 12.6951 1.62426 12.2151L1.09539 11.3151C0.8118 10.8276 0.79647 10.2426 1.08006 9.77762C1.2027 9.55262 1.43264 9.32762 1.69324 9.18512C1.90785 9.08012 2.04581 8.90762 2.17611 8.70512C2.55935 8.06012 2.32941 7.21262 1.67791 6.83012C0.919105 6.40262 0.673835 5.45012 1.11072 4.70762L1.62426 3.82262C2.06881 3.08012 3.01923 2.81762 3.7857 3.25262C4.45252 3.61262 5.31863 3.37262 5.70953 2.73512C5.83216 2.52512 5.90115 2.30012 5.88582 2.07512C5.87049 1.78262 5.9548 1.50512 6.10043 1.28012C6.38402 0.815122 6.89756 0.515122 7.45708 0.500122H8.5378C9.10498 0.500122 9.61852 0.815122 9.90211 1.28012C10.0401 1.50512 10.1321 1.78262 10.1091 2.07512C10.0937 2.30012 10.1627 2.52512 10.2853 2.73512C10.6762 3.37262 11.5424 3.61262 12.2168 3.25262C12.9756 2.81762 13.9337 3.08012 14.3706 3.82262L14.8842 4.70762C15.3287 5.45012 15.0834 6.40262 14.317 6.83012C13.6655 7.21262 13.4355 8.06012 13.8264 8.70512C13.9491 8.90762 14.087 9.08012 14.3016 9.18512ZM5.83217 8.00762C5.83217 9.18512 6.80558 10.1226 8.00893 10.1226C9.21229 10.1226 10.1627 9.18512 10.1627 8.00762C10.1627 6.83012 9.21229 5.88512 8.00893 5.88512C6.80558 5.88512 5.83217 6.83012 5.83217 8.00762Z"
      fill={isCurrentPage ? White : BattleshipGrey}
    />
  </svg>
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
      span:first-child {
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

      span:last-child {
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
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .gas-tracker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 6px;
    background-color: ${Onyx};
    height: 36px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

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

    span:first-child {
      font: 400 12px Montserrat;
      color: ${White};
    }

    span:last-child {
      font: 400 12px Montserrat;
      color: ${MediumSlateBlue};
    }
  }
`;

export const GasIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="26" rx="3" fill="#2C2D30" />
    <path
      d="M8.60731 6C7.77497 6 7.11981 6.65516 7.11981 7.4875V17.76H15.7998V7.4875C15.7998 6.65516 15.1447 6 14.3123 6H8.60731ZM9.05356 7.4H13.8661C14.1461 7.4 14.3998 7.65375 14.3998 7.93375V10.7863C14.3998 11.0662 14.1461 11.32 13.8661 11.32H9.05356C8.77356 11.32 8.51981 11.0662 8.51981 10.7863V7.93375C8.51981 7.65375 8.77356 7.4 9.05356 7.4ZM16.5611 7.47875L16.1586 7.88125L17.7598 9.47375V11.7663C17.7598 12.0845 17.8922 12.4148 18.1186 12.6413L19.4398 13.9538V16.08C19.4398 16.7078 18.9476 17.2 18.3198 17.2C17.692 17.2 17.1998 16.7078 17.1998 16.08V14.68C17.1998 13.9363 16.7383 13.3227 16.0798 13.0963V13.7088C16.4156 13.9002 16.6398 14.2578 16.6398 14.68V16.08C16.6398 17.0217 17.3781 17.76 18.3198 17.76C19.2615 17.76 19.9998 17.0217 19.9998 16.08V11.4338C19.9998 11.1155 19.8675 10.7852 19.6411 10.5588L16.5611 7.47875ZM6.83981 18.32C6.6856 18.32 6.55981 18.4447 6.55981 18.6V19.72C6.55981 19.8753 6.6856 20 6.83981 20H16.0798C16.2351 20 16.3598 19.8753 16.3598 19.72V18.6C16.3598 18.4447 16.2351 18.32 16.0798 18.32H6.83981Z"
      fill="white"
    />
  </svg>
);

export const PageContainer = styled.div`
  flex: 1;
  padding: 25px 20px 20px 20px;
`;
