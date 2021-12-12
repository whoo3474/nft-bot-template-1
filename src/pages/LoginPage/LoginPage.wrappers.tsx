import styled from "styled-components";
import {
  DarkCharcoal,
  Jet,
  MintGreen,
  OceanBlue,
  SilverChalice,
  White,
} from "../../styles/Colors";

export const LoginPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${DarkCharcoal};
  border-radius: 7px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .footer {
    font: 600 9px Montserrat;
    color: ${SilverChalice};
  }
`;

export const PrivateKeyInputWrapper = styled.div`
  width: 440px;
  height: 36px;
  background-color: ${Jet};
  display: flex;
  align-items: center;
  padding-left: 25px;
  border-radius: 5px;

  .input-pre-text {
    font: 700 11px Montserrat;
    color: ${White};
  }

  .private-key-input {
    flex: 1;
    height: 100%;
    text-align: center;
    background: none;
    outline: none;
    border: none;
    -webkit-app-region: none;
    font: 600 10px Montserrat;
    color: ${White};
    text-transform: uppercase;
    letter-spacing: 4px;

    ::placeholder {
      color: ${SilverChalice};
    }
  }
`;

export const AuthenticateButtonWrapper = styled.div<{ isSuccess: boolean }>`
  width: 150px;
  height: 35px;
  background-color: ${({ isSuccess }) => (isSuccess ? MintGreen : OceanBlue)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-app-region: none;

  .button-text {
    font: 700 11px Montserrat;
    color: ${({ isSuccess }) => (isSuccess ? DarkCharcoal : White)};
  }
`;
