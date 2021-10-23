import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  margin: 24px 0;

  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(130%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 12px auto 12px 16px;
    padding: 12px 24px;
  }
`;
