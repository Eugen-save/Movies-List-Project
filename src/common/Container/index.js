import { StyledContainer } from "./styled";

export const Container = ({ children, person }) => {
  return <StyledContainer person={person}>{children}</StyledContainer>;
};
