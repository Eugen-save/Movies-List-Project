import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Error } from "../../common/Error";
import { Header } from "../../common/Header";
import { Loading } from "../../common/Loading";
import { MainContainer } from "../../common/Maincontainer";
import { NoResults } from "../../common/NoResults";
import { Pager } from "../../common/Pager";
import { StyledLink } from "../../common/StyledLink";
import { Tile } from "../../common/Tile";
import { useURLParameter } from "../../useURLParameters";
import {
  fetchPeople,
  selectPeople,
  selectStatus,
  selectTotalPeoplePages,
} from "./peopleSlice";

export const PeopleList = () => {
  const queryParamName = "search";
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const pageParameter = +useURLParameter("page");
  const page = pageParameter < 1 || pageParameter > 500 ? 1 : pageParameter;
  const query = useURLParameter(queryParamName);

  const dispatch = useDispatch();

  useEffect(
    () => dispatch(fetchPeople({ page, query })),
    [dispatch, page, query]
  );

  return (
    <MainContainer>
      {(people.length !== 0) & (status === "success") ? (
        <>
          <Header
            title={query ? `Search results for "${query}"` : "Popular People"}
          />
          <Container person>
            {people &&
              people.map(({ id, name, profile_path }) => {
                return (
                  <StyledLink key={nanoid()} to={`/People/${id}`}>
                    <Tile person title={name} poster={profile_path} />
                  </StyledLink>
                );
              })}
          </Container>
          <Pager page={page} totalPages={totalPeoplePages} />
        </>
      ) : (people.length === 0) & (status === "success") ? (
        <NoResults />
      ) : status === "loading" ? (
        <Loading />
      ) : (
        <Error />
      )}
    </MainContainer>
  );
};
