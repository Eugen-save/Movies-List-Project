import {
  BackLink,
  DangerIcon,
  ErrorContainer,
  Heading,
  Paragraph,
} from "./styled";

export const Error = () => (
  <ErrorContainer>
    <DangerIcon />
    <Heading>Ooops! Something went wrong...</Heading>
    <Paragraph>Please check your internet connection and try again</Paragraph>
    <BackLink to="/">Back to home page</BackLink>
  </ErrorContainer>
);
