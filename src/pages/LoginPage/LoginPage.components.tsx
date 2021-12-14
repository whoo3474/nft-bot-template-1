import { forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";
import LoginWhiteSquare from "../../assets/images/login-white-square.png";
import { MaximumBluePurple, SilverChalice, White } from "../../styles/Colors";
import { CheckIcon, RightArrowWithCircleIcon } from "../Pages.components";
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
    {isSuccess ? <RightArrowWithCircleIcon /> : <CheckIcon />}
  </AuthenticateButtonWrapper>
);
