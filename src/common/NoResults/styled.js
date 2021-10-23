import styled from "styled-components";
import { ReactComponent as NoResultImage } from "../../images/picture.svg";

export const Image = styled(NoResultImage)`
  display: block;
  margin: 40px auto;
  width: 668px;
  height: 508.63px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 222px;
    height: 169.54px;
  }
`;
