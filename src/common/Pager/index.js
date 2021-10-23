import { useEffect, useState } from "react";
import { useReplaceURLParameters } from "../../useURLParameters";
import {
  Arrow,
  ArrowDisabled,
  Button,
  ButtonText,
  ButtonWrapper,
  LetfArrow,
  LetfArrowDisabled,
  Pages,
  PagesWrapper,
} from "./styled";

export const Pager = ({ page, totalPages }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  const replaceURLParameters = useReplaceURLParameters();

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const changePage = (page) => {
    replaceURLParameters([
      {
        key: "page",
        value: page,
      },
    ]);
  };

  return (
    <ButtonWrapper>
      <>
        <Button disabled={page === 1} onClick={() => changePage(1)}>
          {page === 1 ? <LetfArrowDisabled /> : <LetfArrow />}
          {width > breakpoint ? (
            <ButtonText>First</ButtonText>
          ) : page === 1 ? (
            <LetfArrowDisabled />
          ) : (
            <LetfArrow />
          )}
        </Button>
        <Button disabled={page === 1} onClick={() => changePage(page - 1)}>
          {page === 1 ? <LetfArrowDisabled /> : <LetfArrow />}
          {width > breakpoint ? <ButtonText>Previous</ButtonText> : ""}
        </Button>
      </>

      <PagesWrapper>
        <Pages>Page</Pages>
        <Pages number>{page}</Pages>
        <Pages>of</Pages>
        <Pages number>{totalPages}</Pages>
      </PagesWrapper>
      <>
        <Button
          disabled={page === totalPages}
          onClick={() => changePage(page + 1)}
        >
          {width > breakpoint ? <ButtonText>Next</ButtonText> : ""}
          {page === totalPages ? <ArrowDisabled /> : <Arrow />}
        </Button>
        <Button
          disabled={page === totalPages}
          onClick={() => changePage(totalPages)}
        >
          {width > breakpoint ? (
            <ButtonText>Last</ButtonText>
          ) : page === totalPages ? (
            <ArrowDisabled />
          ) : (
            <Arrow />
          )}
          {page === totalPages ? <ArrowDisabled /> : <Arrow />}
        </Button>
      </>
    </ButtonWrapper>
  );
};
