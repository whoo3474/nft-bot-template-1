import { forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";
import LoginWhiteSquare from "../../assets/images/login-white-square.png";
import { MaximumBluePurple, SilverChalice, White } from "../../styles/Colors";
import {
  AuthenticateButtonWrapper,
  PrivateKeyInputWrapper,
} from "./LoginPage.wrappers";

export const LoginPageHeader = styled.div`
  height: 150px;
  width: 100%;
  background: url(${LoginWhiteSquare}) no-repeat,
    linear-gradient(180deg, #655be5 0%, #453db0 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 20px;

  .welcome {
    font: 700 14px Montserrat;
    color: ${MaximumBluePurple};
  }

  .bot-name {
    font: 700 18px Montserrat;
    color: ${White};
  }

  .message {
    height: 15px;
    font: 600 12px Montserrat;
    color: ${MaximumBluePurple};
  }
`;

export const LoginPageForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .variable-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    height: 100px;
  }

  .private-key-prompt {
    font: 600 10px Montserrat;
    color: ${SilverChalice};
  }
`;

export const PrivateKeyInput = forwardRef<HTMLInputElement>((props, ref) => (
  <PrivateKeyInputWrapper>
    <div className="input-pre-text">Enter Private Key</div>
    <input
      className="private-key-input"
      type="text"
      placeholder="XXXX-XXXXX-XXXXX-XXXX"
      spellCheck={false}
      ref={ref}
    />
  </PrivateKeyInputWrapper>
));

export const AuthenticateButton = ({
  isSuccess,
  isLoading,
  onClick,
}: {
  isSuccess: boolean;
  isLoading: boolean;
  onClick: MouseEventHandler;
}) => (
  <AuthenticateButtonWrapper isSuccess={isSuccess} onClick={onClick}>
    <div className="button-text">
      {isSuccess ? "Success!" : isLoading ? "Please wait" : "Authenticate"}
    </div>
    {isSuccess ? (
      <AuthenticateButtonSuccessIcon />
    ) : (
      <AuthenticateButtonDefaultIcon />
    )}
  </AuthenticateButtonWrapper>
);

const AuthenticateButtonDefaultIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="3" fill="white" fillOpacity="0.08" />
    <path
      d="M12 5.66669C15.4923 5.66669 18.3333 8.50769 18.3333 12C18.3333 15.4924 15.4923 18.3334 12 18.3334C8.50763 18.3334 5.66663 15.4924 5.66663 12C5.66663 8.50769 8.50763 5.66669 12 5.66669Z"
      fill="white"
      fillOpacity="0.38"
    />
    <path d="M14.6666 12L10.6666 8.66669V15.3334L14.6666 12Z" fill="white" />
    <path d="M5.66663 11H11.3333V13H5.66663V11Z" fill="white" />
  </svg>
);

const AuthenticateButtonSuccessIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="3" fill="white" fillOpacity="0.37" />
    <path
      d="M12 4.5C7.85775 4.5 4.5 7.85775 4.5 12C4.5 16.1423 7.85775 19.5 12 19.5C16.1423 19.5 19.5 16.1423 19.5 12C19.5 7.85775 16.1423 4.5 12 4.5ZM10.5 16.0605L6.96975 12.5302L8.03025 11.4698L10.5 13.9395L15.9697 8.46975L17.0303 9.53025L10.5 16.0605Z"
      fill="#2C2D30"
    />
  </svg>
);
