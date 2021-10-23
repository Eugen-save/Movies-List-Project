import { baseImgUrl, sizeBackdrop } from "../../ApiParameters";
import {
  BackdropPoster,
  BackdropContainer,
  BigStarIcon,
  Caption,
  LongTitle,
  Rate,
  RateTotal,
  Ratings,
  Rectangle,
  Wrapper,
} from "./styled";

export const Backdrop = ({ title, votes, rate, person, poster }) => {
  return (
    <>
      <Rectangle>
        <BackdropContainer>
          <BackdropPoster
            image={`${baseImgUrl}${sizeBackdrop}${poster}`}
            alt=""
          />

          <Wrapper>
            <LongTitle>{title}</LongTitle>
            {votes ? (
              <Ratings>
                <BigStarIcon />
                <Rate>
                  {rate}
                  <RateTotal>/10</RateTotal>
                </Rate>
                <Caption>{votes} votes</Caption>
              </Ratings>
            ) : (
              <Ratings>
                <Caption>{person ? "" : "No votes yet"} </Caption>
              </Ratings>
            )}
          </Wrapper>
        </BackdropContainer>
      </Rectangle>
    </>
  );
};
