import {
  StyledDetails,
  Poster,
  Description,
  Title,
  Biography,
  BirthdayInformation,
  Birth,
  Frame,
} from "./styled";
import { Placeholder } from "../Placeholder";
import { baseImgUrl, size } from "../../ApiParameters";
export const Details = ({
  poster,
  title,
  subtitle,
  biography,
  additionalTitle,
  birthday,
}) => {
  return (
    <StyledDetails>
      {poster ? (
        <Poster src={`${baseImgUrl}${size}${poster}`} alt="" />
      ) : (
        <Placeholder />
      )}
      <Description>
        <Title>{title}</Title>
        <Birth>
          <Frame birth>
            <BirthdayInformation>{birthday}</BirthdayInformation>
          </Frame>
          <Frame>
            <BirthdayInformation>{additionalTitle}</BirthdayInformation>
          </Frame>
        </Birth>
      </Description>
      <Biography>{biography}</Biography>
    </StyledDetails>
  );
};
