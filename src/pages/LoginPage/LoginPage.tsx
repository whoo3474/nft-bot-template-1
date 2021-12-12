import { useRef, useState } from "react";
import AuthenticationSuccessAnimation from "../../assets/images/authentication-success-animation.gif";
import AuthenticationLoadingAnimation from "../../assets/images/authentication-loading-animation.gif";
import {
  AuthenticateButton,
  LoginPageForm,
  LoginPageHeader,
  PrivateKeyInput,
} from "./LoginPage.components";
import { LoginPageWrapper } from "./LoginPage.wrappers";

export const LoginPage = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const privateKey = useRef<HTMLInputElement>(null);

  return (
    <LoginPageWrapper>
      <LoginPageHeader>
        <div className="welcome">Welcome to</div>
        <div className="bot-name">BotName AIO</div>
        <div className="message">
          {isSuccess
            ? "Key validated successfully"
            : isLoading && "Verifying Private Key"}
        </div>
      </LoginPageHeader>
      <LoginPageForm>
        <div className="variable-display">
          {isSuccess ? (
            <img src={AuthenticationSuccessAnimation} alt="Success" />
          ) : isLoading ? (
            <img src={AuthenticationLoadingAnimation} alt="Loading" />
          ) : (
            <>
              <div className="private-key-prompt">
                Enter your private key to continue
              </div>
              <PrivateKeyInput ref={privateKey} />
            </>
          )}
        </div>
        <AuthenticateButton
          isSuccess={isSuccess}
          isLoading={isLoading}
          onClick={() => {}}
        />
      </LoginPageForm>
      <div className="footer">Powered By Botname</div>
    </LoginPageWrapper>
  );
};
