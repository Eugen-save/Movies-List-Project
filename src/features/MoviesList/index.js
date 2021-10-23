import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Pager } from "../../common/Pager";
import { Tile } from "../../common/Tile";
import { useGenres } from "../../fetchGenres";
import { useURLParameter } from "../../useURLParameters";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { NoResults } from "../../common/NoResults";
import { StyledLink } from "../../common/StyledLink";
import {
  fetchMovies,
  selectMovies,
  selectStatus,
  selectTotalMoviesPages,
} from "./moviesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { MainContainer } from "../../common/Maincontainer";

export const MoviesList = () => {
  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);
  const totalMoviesPages = useSelector(selectTotalMoviesPages);
  const genres = useGenres();
  const pageParameter = +useURLParameter("page");
  const page = pageParameter < 1 || pageParameter > 500 ? 1 : pageParameter;
  const queryParamName = "search";
  const query = useURLParameter(queryParamName);

  const dispatch = useDispatch();

  useEffect(
    () => dispatch(fetchMovies({ page, query })),
    [dispatch, page, query]
  );
  const nameMovieGenres = (genre_ids) =>
    genres && genre_ids.map((tag) => genres.find(({ id }) => id === tag).name);

  return (
    <MainContainer>
      {(movies.length !== 0) & (status === "success") ? (
        <>
          <Header
            title={
              query === null
                ? "Popular movies"
                : `Search results for "${query}"`
            }
          />
          <Container>
            {movies &&
              movies.map(
                ({
                  id,
                  poster_path,
                  title,
                  release_date,
                  genre_ids,
                  vote_average,
                  vote_count,
                }) => {
                  return (
                    <StyledLink key={nanoid()} to={`/Movies/${id}`}>
                      <Tile
                        poster={poster_path}
                        title={title}
                        subtitle={release_date && release_date.slice(0, 4)}
                        genres={nameMovieGenres(genre_ids)}
                        rate={vote_average}
                        votes={vote_count}
                      />
                    </StyledLink>
                  );
                }
              )}
          </Container>
          <Pager page={page} totalPages={totalMoviesPages} />
        </>
      ) : (status === "success") & (movies.length === 0) ? (
        <NoResults query={query} />
      ) : status === "loading" ? (
        <Loading />
      ) : (
        <Error />
      )}
    </MainContainer>
  );
};
