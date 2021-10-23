import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Danger } from "../../images/danger.svg";

export const Heading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.woodsmoke};
  line-height: 43, 2px;
  margin: 24px 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
    margin: 12px 0;
  }
`;

export const Paragraph = styled.p`
  margin: 24px 0;
  padding: 0 80.73px;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    margin: 12px 0;
    padding: 0 40.36px;
  }
`;

export const DangerIcon = styled(Danger)`
  width: 100px;
  height: 90, 83px;
  margin: 15px 10px 14, 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 50px;
    height: 45, 41px;
    margin: 7, 5px 5px 7, 08px;
  }
`;

export const BackLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
  }
`;

export const ErrorContainer = styled.section`
  max-width: 596px;
  position: relative;
  margin: 0 auto;
  padding: 0;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    max-width: 283px;
  }
`;
