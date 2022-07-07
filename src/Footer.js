import {FooterDiv, Us, Logo, Links, Aboutus, Copyright, Title, Title2} from './Footer-style.js'

function Footer() {
  return (
    <FooterDiv>
        <Us>
            <Logo>
            <Title>JSON</Title>
            <Title2>prettier</Title2>
            </Logo>
            <Links>
                <p>via Cinque Martiri, 27</p>
                <p>Como (CO) 21010 - Italy</p>
                <p>info@akadev.it</p>
            </Links>
            <Aboutus>
                <h5>About</h5>
                <p>JSON is a wide-spread file format used for data rapresentation, infact it's a data-only language. Even tough a JSON file is supposed to be human-readable, sometimes server or apps minimize their contents and the results can be tough to read. So when it happens prettify it!</p>
            </Aboutus>
        </Us>
        <Copyright>
            <a href="/terms">Terms of Use</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/sitemap">Sitemap</a>
            <p>&copy; 2022 AKAdev</p>
        </Copyright>
    </FooterDiv>
  );
}

export default Footer;