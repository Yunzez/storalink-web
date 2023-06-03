import styled from "styled-components";
import theme from "@/app/theme";
export const Test = styled.div`
  color: red;
`;

export const HeaderText = styled.small`
font-size: 5rem;
color: ${theme.themeYellow};
font-weight: 600;
@media (max-width: 568px) {
    font-size: 4rem;
font-weight: 500;
  }
`
