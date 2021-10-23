import styled from "styled-components";
import { ReactComponent as bigStar } from "../../images/star.svg";

export const BackdropContainer = styled.div`
  max-width: 1368px;
  height: 770px;
  margin: 0 auto;
  display: grid;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    height: 148px;
  }
`;

export const Rectangle = styled.div`
  max-width: 100%;
  height: 769px;
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    height: 148px;
    display: grid;
    grid-column: 2;
  }
`;

export const BackdropPoster = styled.div`
  width: 1368px;
  height: 769px;
  margin: 0 auto;
  grid-row: 1;
  grid-column: 1;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 50px black, inset 0 0 100px black, inset 0 0 200px black,
    inset 0 0 300px black, inset 0 0 400px black;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 320px;
    height: 148px;
    box-shadow: inset 0 0 5px black, inset 0 0 10px black, inset 0 0 15px black,
      inset 0 0 20px black, inset 0 0 25px black;
  }
`;

export const LongTitle = styled.header`
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const BigStarIcon = styled(bigStar)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 16px;
  }
`;

export const Wrapper = styled.article`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 24px;
  grid-row: 1;
  grid-column: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 4px;
    margin-left: 16px;
  }
`;

export const RateTotal = styled.span`
  font-size: 16px;
  line-height: 19px;
  margin-left: 7px;
  font-weight: normal;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
    line-height: 12px;
    margin-left: 2px;
    font-weight: normal;
  }
`;

export const Rate = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 30px;
  line-height: 39px;
  align-items: center;
  padding: 0 7px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 21px;
  }
`;

export const Ratings = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
  max-width: 150px;
  flex-wrap: wrap;
  row-gap: 16.9px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-bottom: 8px;
    height: 18px;
    max-width: 100%;
    flex-wrap: nowrap;
  }
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 19px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
  }
`;
