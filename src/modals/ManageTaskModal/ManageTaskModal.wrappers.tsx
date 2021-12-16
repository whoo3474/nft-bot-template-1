import styled from "styled-components";
import { DarkCharcoal } from "../../styles/Colors";

export const ManageTaskModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  background-color: ${DarkCharcoal};
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  -webkit-app-region: drag;
`;
