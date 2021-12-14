import { ComponentType, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import ActionBarWhiteSquare from "../assets/images/action-bar-white-square.png";
import {
  BattleshipGrey,
  Iris,
  ScreaminGreen,
  SilverChalice,
  White,
} from "../styles/Colors";
import { ActionButtonWrapper, ActionGroupWrapper } from "./Pages.wrappers";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .header-title {
    font: 700 14px Montserrat;
    color: ${White};
  }

  .header-info {
    display: flex;
    align-items: center;

    ::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background-color: ${ScreaminGreen};
      margin-right: 5px;
    }

    font: 600 10px Montserrat;
    color: ${SilverChalice};
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionBar = styled.div`
  height: 95px;
  background: url(${ActionBarWhiteSquare}) no-repeat, ${Iris};
  border-radius: 10px;
`;

export const ActionBarWithColumnHeaders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 95px;
  background: url(${ActionBarWhiteSquare}) no-repeat, ${Iris};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px 20px;
`;

export const ActionGroup = ({
  groupTitle,
  children,
}: {
  groupTitle: string;
  children: ReactNode;
}) => (
  <ActionGroupWrapper>
    <div className="group-title">{groupTitle}</div>
    <div className="actions">{children}</div>
  </ActionGroupWrapper>
);

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

export const WindowsIcon = ({ isCurrentPage }: { isCurrentPage: boolean }) => (
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

export const WalletIcon = ({ isCurrentPage }: { isCurrentPage: boolean }) => (
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

export const GearIcon1 = ({ isCurrentPage }: { isCurrentPage: boolean }) => (
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

export const GasIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.60731 0C1.77497 0 1.11981 0.655156 1.11981 1.4875V11.76H9.79981V1.4875C9.79981 0.655156 9.14466 0 8.31231 0H2.60731ZM3.05356 1.4H7.86606C8.14606 1.4 8.39981 1.65375 8.39981 1.93375V4.78625C8.39981 5.06625 8.14606 5.32 7.86606 5.32H3.05356C2.77356 5.32 2.51981 5.06625 2.51981 4.78625V1.93375C2.51981 1.65375 2.77356 1.4 3.05356 1.4ZM10.5611 1.47875L10.1586 1.88125L11.7598 3.47375V5.76625C11.7598 6.08453 11.8922 6.41484 12.1186 6.64125L13.4398 7.95375V10.08C13.4398 10.7078 12.9476 11.2 12.3198 11.2C11.692 11.2 11.1998 10.7078 11.1998 10.08V8.68C11.1998 7.93625 10.7383 7.32266 10.0798 7.09625V7.70875C10.4156 7.90016 10.6398 8.25781 10.6398 8.68V10.08C10.6398 11.0217 11.3781 11.76 12.3198 11.76C13.2615 11.76 13.9998 11.0217 13.9998 10.08V5.43375C13.9998 5.11547 13.8675 4.78516 13.6411 4.55875L10.5611 1.47875ZM0.839814 12.32C0.685596 12.32 0.559814 12.4447 0.559814 12.6V13.72C0.559814 13.8753 0.685596 14 0.839814 14H10.0798C10.2351 14 10.3598 13.8753 10.3598 13.72V12.6C10.3598 12.4447 10.2351 12.32 10.0798 12.32H0.839814Z"
      fill="white"
    />
  </svg>
);

export const RightArrowWithCircleIcon = () => (
  <IconContainer size="24px" color="#FFFFFF14">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99996 1.66669C11.4923 1.66669 14.3333 4.50769 14.3333 8.00002C14.3333 11.4924 11.4923 14.3334 7.99996 14.3334C4.50763 14.3334 1.66663 11.4924 1.66663 8.00002C1.66663 4.50769 4.50763 1.66669 7.99996 1.66669Z"
        fill="white"
        fillOpacity="0.38"
      />
      <path
        d="M10.6666 8.00002L6.66663 4.66669V11.3334L10.6666 8.00002Z"
        fill="white"
      />
      <path d="M1.66663 7H7.33329V9H1.66663V7Z" fill="white" />
    </svg>
  </IconContainer>
);

export const CheckIcon = () => (
  <IconContainer size="24px" color="#FFFFFFBF">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.5C3.85775 0.5 0.5 3.85775 0.5 8C0.5 12.1423 3.85775 15.5 8 15.5C12.1423 15.5 15.5 12.1423 15.5 8C15.5 3.85775 12.1423 0.5 8 0.5ZM6.5 12.0605L2.96975 8.53025L4.03025 7.46975L6.5 9.9395L11.9697 4.46975L13.0303 5.53025L6.5 12.0605Z"
        fill="#2C2D30"
      />
    </svg>
  </IconContainer>
);

export const IconContainer = styled.div<{ size: string; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-radius: 3px;
`;

export const PageContainer = styled.div`
  flex: 1;
  padding: 25px 20px 20px 20px;
`;

export const RefreshWithCheckIcon = ({
  isCheckVisible,
}: {
  isCheckVisible: boolean;
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4196 1.88109L13.1667 4.0199V0.641153C13.1667 0.454153 12.9404 0.360654 12.8079 0.492758L11.4196 1.88109Z"
      fill="white"
    />
    <path
      d="M7.50032 0.416626C3.59458 0.416626 0.416992 3.59421 0.416992 7.49996C0.416992 11.4057 3.59458 14.5833 7.50032 14.5833C8.79233 14.5833 10.0025 14.232 11.0462 13.6242C11.2123 13.5275 11.2641 13.3104 11.1677 13.1436L10.6393 12.2284C10.5433 12.0623 10.3298 11.9975 10.164 12.0942C9.3806 12.5507 8.47074 12.8125 7.50032 12.8125C4.57101 12.8125 2.18783 10.4293 2.18783 7.49996C2.18783 4.57065 4.57101 2.18746 7.50032 2.18746C8.5306 2.18746 9.48791 2.48886 10.3018 2.99956L9.3473 3.95404C9.2152 4.08615 9.3087 4.31246 9.49605 4.31246H12.8865C13.0413 4.31246 13.167 4.18673 13.167 4.03196V3.26802C11.8739 1.54111 9.8187 0.416626 7.50032 0.416626Z"
      fill="white"
    />
    {isCheckVisible && (
      <>
        <path
          d="M10.6393 12.2286C10.5433 12.0625 10.3298 11.9977 10.164 12.0944C9.57893 12.4354 8.92301 12.6674 8.22424 12.763C8.26816 13.3779 8.43958 13.9584 8.71831 14.4737C9.55308 14.327 10.3386 14.0363 11.0466 13.6244C11.2127 13.5277 11.2644 13.3106 11.1681 13.1438L10.6393 12.2286Z"
          fill="url(#paint0_radial_0_1)"
        />
        <path
          d="M16.0003 12.4583C16.0003 14.414 14.4144 16 12.4587 16C10.503 16 8.91699 14.414 8.91699 12.4583C8.91699 10.5026 10.503 8.91663 12.4587 8.91663C14.4144 8.91663 16.0003 10.5026 16.0003 12.4583Z"
          fill="url(#paint1_linear_0_1)"
        />
        <path
          d="M11.979 14.0003L10.5623 12.5836C10.4932 12.5146 10.4932 12.4023 10.5623 12.3332L10.8127 12.0828C10.8818 12.0138 10.994 12.0138 11.0631 12.0828L12.1043 13.1237L14.0306 11.1974C14.0997 11.1284 14.212 11.1284 14.281 11.1974L14.5314 11.4478C14.6005 11.5169 14.6005 11.6292 14.5314 11.6982L12.2294 14.0003C12.1603 14.0694 12.0484 14.0694 11.979 14.0003Z"
          fill="white"
        />
      </>
    )}
    <defs>
      <radialGradient
        id="paint0_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.9958 12.734) scale(3.78817)"
      >
        <stop />
        <stop offset="0.979" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="9.95435"
        y1="9.95398"
        x2="14.963"
        y2="14.9626"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#21AD64" />
        <stop offset="1" stop-color="#088242" />
      </linearGradient>
    </defs>
  </svg>
);

export const ActionButton = ({
  buttonText,
  ButtonIcon,
  onClick,
}: {
  buttonText: string;
  ButtonIcon: ComponentType;
  onClick: MouseEventHandler;
}) => (
  <ActionButtonWrapper onClick={onClick}>
    <div className="button-text">{buttonText}</div>
    <IconContainer size="24px" color="#FFFFFF14">
      <ButtonIcon />
    </IconContainer>
  </ActionButtonWrapper>
);

export const GearIcon2 = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9013 7.92175C12.1099 8.03258 12.2709 8.20758 12.3842 8.38258C12.6047 8.74425 12.5868 9.18758 12.3722 9.57841L11.9549 10.2784C11.7344 10.6517 11.323 10.8851 10.8998 10.8851C10.6911 10.8851 10.4586 10.8267 10.2679 10.7101C10.1129 10.6109 9.93402 10.5759 9.74325 10.5759C9.15307 10.5759 8.65828 11.0601 8.64039 11.6376C8.64039 12.3084 8.09194 12.8334 7.40638 12.8334H6.59562C5.9041 12.8334 5.35565 12.3084 5.35565 11.6376C5.34373 11.0601 4.84893 10.5759 4.25875 10.5759C4.06202 10.5759 3.88318 10.6109 3.73414 10.7101C3.54338 10.8267 3.30492 10.8851 3.10223 10.8851C2.67301 10.8851 2.26167 10.6517 2.0411 10.2784L1.62976 9.57841C1.40919 9.19925 1.39727 8.74425 1.61784 8.38258C1.71322 8.20758 1.89207 8.03258 2.09475 7.92175C2.26167 7.84008 2.36898 7.70591 2.47032 7.54841C2.76839 7.04675 2.58955 6.38758 2.08283 6.09008C1.49265 5.75758 1.30189 5.01675 1.64169 4.43925L2.0411 3.75091C2.38686 3.17341 3.12608 2.96925 3.72222 3.30758C4.24086 3.58758 4.9145 3.40091 5.21854 2.90508C5.31392 2.74175 5.36757 2.56675 5.35565 2.39175C5.34373 2.16425 5.4093 1.94841 5.52257 1.77341C5.74314 1.41175 6.14256 1.17841 6.57774 1.16675H7.4183C7.85945 1.16675 8.25886 1.41175 8.47943 1.77341C8.58674 1.94841 8.65828 2.16425 8.64039 2.39175C8.62847 2.56675 8.68212 2.74175 8.7775 2.90508C9.08154 3.40091 9.75518 3.58758 10.2798 3.30758C10.87 2.96925 11.6151 3.17341 11.9549 3.75091L12.3544 4.43925C12.7001 5.01675 12.5094 5.75758 11.9132 6.09008C11.4065 6.38758 11.2276 7.04675 11.5317 7.54841C11.6271 7.70591 11.7344 7.84008 11.9013 7.92175ZM5.31392 7.00592C5.31392 7.92175 6.07102 8.65092 7.00696 8.65092C7.94291 8.65092 8.68212 7.92175 8.68212 7.00592C8.68212 6.09008 7.94291 5.35508 7.00696 5.35508C6.07102 5.35508 5.31392 6.09008 5.31392 7.00592Z"
      fill="white"
    />
  </svg>
);

export const PlusIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" width="2" height="12" rx="1" fill="white" />
    <rect
      y="7"
      width="2"
      height="12"
      rx="1"
      transform="rotate(-90 0 7)"
      fill="white"
    />
  </svg>
);

export const PlayIcon = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.15318 5.16137C8.76025 5.55567 8.76024 6.44433 8.15318 6.83863L1.6557 11.0589C0.990433 11.491 0.111001 11.0135 0.111001 10.2202V1.77976C0.111001 0.986479 0.990435 0.509031 1.65571 0.941137L8.15318 5.16137Z"
      fill="white"
    />
  </svg>
);

export const PlayIconGrey = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.15318 5.16137C8.76025 5.55567 8.76024 6.44433 8.15318 6.83863L1.6557 11.0589C0.990433 11.491 0.111001 11.0135 0.111001 10.2202V1.77976C0.111001 0.986479 0.990435 0.509031 1.65571 0.941137L8.15318 5.16137Z"
      fill="#ADAEAF"
    />
  </svg>
);

export const PauseIcon = () => (
  <svg
    width="9"
    height="10"
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="3" height="10" rx="1" fill="white" />
    <rect x="6" width="3" height="10" rx="1" fill="white" />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.0842 1.89173C10.3111 1.89173 10.5 2.08015 10.5 2.31989V2.54156C10.5 2.77547 10.3111 2.96972 10.0842 2.96972H0.416415C0.188918 2.96972 0 2.77547 0 2.54156V2.31989C0 2.08015 0.188918 1.89173 0.416415 1.89173H2.11725C2.46275 1.89173 2.76343 1.64615 2.84115 1.29965L2.93022 0.901824C3.06865 0.359913 3.52421 0 4.04557 0H6.45442C6.97012 0 7.43079 0.359913 7.56411 0.873241L7.65942 1.29907C7.73657 1.64615 8.03725 1.89173 8.38332 1.89173H10.0842ZM9.22005 9.99485C9.39762 8.33995 9.70852 4.40832 9.70852 4.36866C9.71986 4.24849 9.68072 4.13474 9.603 4.04316C9.5196 3.95741 9.41408 3.90666 9.29778 3.90666H1.20663C1.08976 3.90666 0.978562 3.95741 0.901407 4.04316C0.823116 4.13474 0.784538 4.24849 0.790211 4.36866C0.791254 4.37595 0.80241 4.51444 0.82106 4.74597C0.903912 5.77453 1.13467 8.63927 1.28378 9.99485C1.3893 10.9935 2.04456 11.6212 2.99369 11.6439C3.7261 11.6608 4.48064 11.6667 5.2522 11.6667C5.97894 11.6667 6.71703 11.6608 7.47213 11.6439C8.45417 11.627 9.10886 11.0104 9.22005 9.99485Z"
      fill="white"
    />
  </svg>
);

export const TrashIconGrey = () => (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.0842 1.89173C10.3111 1.89173 10.5 2.08015 10.5 2.31989V2.54156C10.5 2.77547 10.3111 2.96972 10.0842 2.96972H0.416415C0.188918 2.96972 0 2.77547 0 2.54156V2.31989C0 2.08015 0.188918 1.89173 0.416415 1.89173H2.11725C2.46275 1.89173 2.76343 1.64615 2.84115 1.29965L2.93022 0.901824C3.06865 0.359913 3.52421 0 4.04557 0H6.45442C6.97012 0 7.43079 0.359913 7.56411 0.873241L7.65942 1.29907C7.73657 1.64615 8.03725 1.89173 8.38332 1.89173H10.0842ZM9.22005 9.99485C9.39762 8.33995 9.70852 4.40832 9.70852 4.36866C9.71986 4.24849 9.68072 4.13474 9.603 4.04316C9.5196 3.95741 9.41408 3.90666 9.29778 3.90666H1.20663C1.08976 3.90666 0.978562 3.95741 0.901407 4.04316C0.823116 4.13474 0.784538 4.24849 0.790211 4.36866C0.791254 4.37595 0.80241 4.51444 0.82106 4.74597C0.903912 5.77453 1.13467 8.63927 1.28378 9.99485C1.3893 10.9935 2.04456 11.6212 2.99369 11.6439C3.7261 11.6608 4.48064 11.6667 5.2522 11.6667C5.97894 11.6667 6.71703 11.6608 7.47213 11.6439C8.45417 11.627 9.10886 11.0104 9.22005 9.99485Z"
      fill="#ADAEAF"
    />
  </svg>
);