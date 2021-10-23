import { useLocation } from "react-router-dom";
import {
  useReplaceURLParameters,
  useURLParameter,
} from "../../useURLParameters";
import {
  Link,
  LinkItem,
  Links,
  LogoHeader,
  LogoWrapper,
  NavigationContainer,
  StyledInput,
  StyledLogo,
  StyledNavigation,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  const queryParamName = "search";
  const location = useLocation();
  const query = useURLParameter(queryParamName);
  const replaceURLParameters = useReplaceURLParameters();
  const onInputChange = ({ target }) => {
    replaceURLParameters([
      {
        key: queryParamName,
        value: target.value.trim() !== "" ? target.value : "",
      },
      {
        key: "page",
        value: 1,
      },
    ]);
  };

  return (
    <StyledNavigation>
      <NavigationContainer>
        <Wrapper>
          <LogoWrapper>
            <StyledLogo />
            <LogoHeader>Movies Browser</LogoHeader>
          </LogoWrapper>
          <Links>
            <LinkItem>
              <Link to="/Movies">Movies</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/People">People</Link>
            </LinkItem>
          </Links>
        </Wrapper>
        <StyledInput
          onChange={onInputChange}
          value={query || ""}
          placeholder={`Search for ${
            location.pathname.includes("/Movies") ? "movies..." : "people..."
          }`}
        />
      </NavigationContainer>
    </StyledNavigation>
  );
};
