import { Image } from "./styled";
import { Header } from "../../common/Header";
import { useURLParameter } from "../../useURLParameters";

export const NoResults = () => {
  const queryParamName = "search";
  const query = useURLParameter(queryParamName);
  return (
    <>
      <Header title={`Sorry, there are no results for "${query}"`} />
      <Image />
    </>
  );
};
