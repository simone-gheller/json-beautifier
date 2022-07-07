import styled from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Head= styled.div`
  width: 100%;
  height: 130px;
`

const Logo = styled.div`
  width: 230px;
  height: 140px;
  margin-left: 90px;
  margin-top: -10px;
  cursor: default;
`

const Title= styled.h1`
font-size: 50px;
background-image: linear-gradient(to right, #3494E6 0%, #EC6EAD  51%, #3494E6  100%);
  -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`

const Title2 = styled.h2`
  margin-top: -50px;
  margin-left: 38px;
  font-family: "Roboto";
`

function Header() {
    return (
      <Head>
        <Logo>
          <Title>JSON</Title>
          <Title2>prettier</Title2>
        </Logo>
      </Head>
    );
  }
  
  export default Header;
  