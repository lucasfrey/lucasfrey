import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const Footer = () => (
    <FooterContainer>
        <p>That's it!</p>
    </FooterContainer>
)

export default Footer;
