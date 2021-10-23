import { PageFooter, FooterContainer, FooterLogo } from "./styled";

export const Footer = () => (
    <PageFooter>
        <FooterContainer>
            This product uses the TMDB API but is not endorsed or certified by TMDB.
            <br />
            Created by Paweł Suchy, Krzysztof Jaczewski and Evgeny Savelyev
            <FooterLogo />
        </FooterContainer>
    </PageFooter>
);
