import styled, { css } from "styled-components";
import { ReactComponent as Camera } from "../../images/video.svg";
import { ReactComponent as Profile } from "../../images/profile.svg";

export const StyledPlaceholder = styled.div`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.silver};
  display: grid;
  place-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 114px;
    height: 169px;
  }

  ${({ person }) =>
    person &&
    css`
      width: 177px;
      height: 264px;
      border-radius: 5px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 120px;
        height: 178px;
      }
    `}
`;

export const CameraIcon = styled(Camera)`
  width: 100px;
  height: 75px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 40px;
  }
`;

export const PersonIcon = styled(Profile)`
  width: 100px;
  height: 75px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 48px;
    height: 60px;
  }
`;
