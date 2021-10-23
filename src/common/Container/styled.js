import styled, { css } from "styled-components";

export const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  gap: 24px;
  margin: 0 auto;
  transition: all 0.5s;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
    width: 100%;
    grid-template-columns: auto;
  }
  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      grid-template-columns: repeat(auto-fill, 208px);

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: repeat(auto-fill, 136px);
        padding: 16px;
      }
    `}
`;
