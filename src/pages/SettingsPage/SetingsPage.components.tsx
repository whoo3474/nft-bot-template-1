import { ComponentType, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { Tuna, White } from "../../styles/Colors";
import { IconContainer } from "../Pages.components";
import { SettingButtonWrapper, SettingWrapper } from "./SettingsPage.wrappers";

export const SettingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  -webkit-app-region: none;
`;

export const Setting = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <SettingWrapper>
    <div className="header">{title}</div>
    <div className="description">{description}</div>
    {children}
  </SettingWrapper>
);

export const SettingInput = styled.input`
  outline: none;
  border: none;
  background-color: ${Tuna};
  height: 36px;
  font: 700 11px Montserrat;
  margin: 0px 20px;
  border-radius: 5px;
  padding-left: 15px;
  color: ${White};
  margin-bottom: 14px;

  ::placeholder {
    color: ${White};
  }
`;

export const SettingButton = ({
  text,
  ButtonIcon,
  onClick,
}: {
  text: string;
  ButtonIcon: ComponentType;
  onClick: MouseEventHandler;
}) => (
  <SettingButtonWrapper onClick={onClick}>
    <div>{text}</div>
    <IconContainer size="24px" color={`${White}14`}>
      <ButtonIcon />
    </IconContainer>
  </SettingButtonWrapper>
);
