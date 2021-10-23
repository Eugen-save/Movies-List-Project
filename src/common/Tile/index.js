import {
  Caption,
  Descrition,
  Poster,
  Info,
  Rate,
  Ratings,
  StyledTile,
  StarIcon,
  Tag,
  Tags,
  Title,
  TileDate,
  TileCharacter,
} from "./styled";
import { Placeholder } from "../Placeholder";
import { baseImgUrl, size } from "../../ApiParameters";
export const Tile = ({
  poster,
  title,
  subtitle,
  genres,
  rate,
  votes,
  person,
  character,
}) => {
  return (
    <StyledTile person={person}>
      {poster ? (
        <Poster person={person} src={`${baseImgUrl}${size}${poster}`} alt="" />
      ) : (
        <Placeholder person={person} />
      )}
      <Descrition>
        <Info>
          <Title person={person}>{title}</Title>
          <TileCharacter>{character}</TileCharacter>
          <TileDate>{subtitle}</TileDate>
        </Info>
        <Tags>
          {genres && genres.map((genre) => <Tag key={genre}>{genre}</Tag>)}
        </Tags>
        <Ratings>
          {votes ? (
            <>
              <StarIcon />
              <Rate>{rate}</Rate>
              <Caption>{votes} votes</Caption>
            </>
          ) : (
            <Caption>{person ? "" : "No votes yet"} </Caption>
          )}
        </Ratings>
      </Descrition>
    </StyledTile>
  );
};
