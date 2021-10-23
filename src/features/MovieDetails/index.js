import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovie,
  selectMovie,
  selectMovieCredits,
  selectStatus,
} from "./movieSlice";
import { useEffect } from "react";
import { Backdrop } from "../../common/Backdrop";
import { Container } from "../../common/Container";
import { MovieInfo } from "../../common/MovieInfo";
import { Tile } from "../../common/Tile";
import { Header } from "../../common/Header";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { StyledLink } from "../../common/StyledLink";
import { nanoid } from "@reduxjs/toolkit";
import { MainContainer } from "../../common/Maincontainer";
import { useState } from "react";
import { Button } from "../../common/Button";

export const MovieDetails = () => {
  const { id } = useParams();
  const [castLimit, setCastLimit] = useState(12);
  const [crewLimit, setCrewLimit] = useState(12);
  const {
    backdrop_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    production_countries,
    poster_path,
    genres,
  } = useSelector(selectMovie);
  const { cast, crew } = useSelector(selectMovieCredits);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMovie({ id })), [dispatch, id]);

  return (
    <>
      {status === "success" ? (
        <>
          <Backdrop
            title={title}
            poster={backdrop_path}
            rate={vote_average}
            votes={vote_count}
          />
          <MainContainer>
            <MovieInfo
              poster={poster_path}
              title={
                (title.includes(":") &&
                  title.slice(0, title.lastIndexOf(":"))) ||
                (title.includes(" and ") &&
                  title.slice(0, title.lastIndexOf(" and "))) ||
                title
              }
              description={overview}
              date={release_date && release_date.slice(0, 4)}
              fullDate={
                release_date &&
                `${release_date.slice(8, 10)}.${release_date.slice(
                  5,
                  7
                )}.${release_date.slice(0, 4)}`
              }
              rate={vote_average}
              votes={vote_count}
              fullCountryName={
                production_countries &&
                `${production_countries.map(({ name }) => ` ${name}`)} `
              }
              genres={genres && genres.map(({ name }) => name)}
            />
            {cast && (
              <>
                <Header title={"Cast"} />
                <Container person>
                  {cast
                    .slice(0, cast.length > castLimit ? castLimit : cast.length)
                    .map(({ id, name, profile_path, character }) => {
                      return (
                        <StyledLink key={nanoid()} to={`/People/${id}`}>
                          <Tile
                            person
                            poster={profile_path}
                            character={character}
                            title={name}
                          />
                        </StyledLink>
                      );
                    })}
                </Container>
                {cast.length > 12 ? (
                  <Button
                    onClick={() =>
                      setCastLimit(castLimit === 12 ? cast.lenght : 12)
                    }
                  >
                    {castLimit === 12 ? "Show more" : "Hide"}
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}
            {crew && (
              <>
                <Header title={"Crew"} />
                <Container person>
                  {crew
                    .slice(0, crew.length > crewLimit ? crewLimit : crew.length)
                    .map(({ name, profile_path, department, id }) => {
                      return (
                        <StyledLink key={nanoid()} to={`/People/${id}`}>
                          <Tile
                            person
                            poster={profile_path}
                            character={department}
                            title={name}
                          />
                        </StyledLink>
                      );
                    })}
                </Container>
                {crew.length > 12 ? (
                  <Button
                    onClick={() =>
                      setCrewLimit(crewLimit === 12 ? crew.length : 12)
                    }
                  >
                    {crewLimit === 12 ? "Show more" : "Hide"}
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}
          </MainContainer>
        </>
      ) : status === "loading" ? (
        <Loading />
      ) : (
        <Error />
      )}
    </>
  );
};
