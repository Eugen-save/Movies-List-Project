import { StyledPlaceholder, CameraIcon, PersonIcon } from "./styled";

export const Placeholder = ({ person }) => (
  <StyledPlaceholder person={person}>
    {person ? <PersonIcon /> : <CameraIcon />}
  </StyledPlaceholder>
);
