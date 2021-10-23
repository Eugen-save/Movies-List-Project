import styled from "styled-components";

export const StyledHeader = styled.h1`
  margin: 24px auto;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  max-width: 1380px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 24px auto 12px 16px;
    font-size: 18px;
    line-height: 21.6px;
  }
`;
