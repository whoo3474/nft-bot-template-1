import styled from "styled-components";
import { SilverChalice, White } from "../styles/Colors";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .header-title {
    font: 700 14px Montserrat;
    color: ${White};
  }

  .header-info {
    font: 600 10px Montserrat;
    color: ${SilverChalice};
  }
`;
