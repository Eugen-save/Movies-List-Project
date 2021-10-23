import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/video.svg";
import SearchIcon from "../../images/search.svg";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.woodsmoke};
  padding: 23px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const NavigationContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1368px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 16px;
`;

export const StyledLogo = styled(Logo)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 17px;
    height: 17px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 120px;
    margin-right: 0;
  }
`;

export const LogoHeader = styled.h1`
  margin: 0 0 0 12px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-left: 8px;
    font-size: 13px;
    letter-spacing: -0.5px;
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  text-transform: uppercase;
  padding-left: 0;
  font-weight: 600;
  font-size: 14px;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-left: 10px;
  }
`;

export const LinkItem = styled.li``;

export const Link = styled(NavLink)`
  white-space: nowrap;
  padding: 8px 24px;
  text-decoration: none;
  color: currentColor;
  background-color: ${({ theme }) => theme.colors.woodsmoke};
  border: 1px solid transparent;
  border-radius: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    padding: 8px 12px;
  }

  &:hover {
    filter: invert(1);
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const StyledInput = styled.input`
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: 17px center;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 33px;
  padding: 12px 40px;
  max-width: 432px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-top: 24px;
  }
`;
