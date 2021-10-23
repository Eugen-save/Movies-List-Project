import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";

export const Wrapper = styled.article`
  display: grid;
  gap: 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  margin: 64px auto;
  grid-template-rows: repeat(2, 260px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 16px;
    margin: 16px;
    grid-template-columns: 114px auto;
    grid-template-rows: repeat(2, auto);
    gap: 16px;
  }
`;

export const Description = styled.div`
  display: grid;
  gap: 24px;
  grid-row: 1;
  grid-column: 2/6;
  grid-template-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 8px;
    grid-template-rows: auto;
    margin-bottom: 16px;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 312px;
  height: 464px;
  left: 40px;
  top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 114px;
    height: 169px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 36px;
  align-items: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-weight: 500;
    font-size: 16px;
    flex-wrap: wrap;
  }
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: normal;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-weight: 500;
    font-size: 13px;
    height: 17px;
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;

export const ProductionRelease = styled.div`
  display: grid;
  gap: 8px;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
  }
`;

export const MainInfo = styled.p`
  font-size: 20px;
  line-height: 32px;
  grid-row: 2;
  grid-column: 2 / span 4;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    line-height: 22px;
    grid-column: 1 / span 5;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};

  ${({ rate }) =>
    rate &&
    css`
      font-size: 14px;
      line-height: 17px;
      align-items: center;
      color: ${({ theme }) => theme.colors.black};
      margin-left: 8px;
    `}
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-left: 0;

  &:empty {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: row;
    align-items: center;
    padding: 0px;

    gap: 8px;
  }
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;

export const Ratings = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 7px;
    flex-wrap: nowrap;
  }
`;

export const Rate = styled.p`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const Caption = styled.p`
  font-size: 14px;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;

export const StarIcon = styled(Star)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 16px;
  }
`;
