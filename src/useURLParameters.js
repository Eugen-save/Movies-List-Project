import { useHistory, useLocation } from "react-router-dom";

export const useURLParameter = (paramName) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(paramName);
};

export const useReplaceURLParameters = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const replaceParameters = (parameters) => {
    parameters.forEach(({ key, value }) => {
      if (value === "") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    history.push(
      `${
        location.pathname.includes("Movies") ? "/Movies" : "/People"
      }?${searchParams.toString()}`
    );
  };

  return replaceParameters;
};
