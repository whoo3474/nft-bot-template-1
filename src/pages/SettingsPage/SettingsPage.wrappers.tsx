import styled from "styled-components";
import {
  Jet,
  OceanBlue,
  SilverChalice,
  Tuna,
  White,
} from "../../styles/Colors";

export const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 180px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${Jet};

  .header {
    display: flex;
    align-items: center;
    padding-left: 24px;
    font: 700 12px Montserrat;
    color: ${White};
    background-color: ${Tuna};
    height: 36px;
    margin-bottom: 15px;
  }

  .description {
    padding-left: 25px;
    font: 600 11px Montserrat;
    color: ${SilverChalice};
    margin-bottom: 14px;
  }

  .button-group {
    display: flex;
    column-gap: 7px;
    margin: 0px 20px;
  }
`;

export const SettingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  width: 139px;
  background-color: ${OceanBlue};
  border-radius: 5px;
  padding-left: 10px;
  font: 700 11px Montserrat;
  color: ${White};
  padding-right: 7px;
  cursor: pointer;
`;
