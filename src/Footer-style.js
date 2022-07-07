
import styled from 'styled-components';

export const FooterDiv = styled.footer`
    margin-top: 160px;
    background-color: #230357;
    width: 100%;
   
    display: flex;
    flex-direction: column;
    color: #fff;
`;


export const Copyright = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-bottom: 30px;

    & p, a, p{
        color: rgb(129, 129, 129);
        font-size: 0.9em;
        text-decoration: none;
    }
`


export const Aboutus = styled.div`
    flex-basis: 33%;

    & p{
        color: rgb(129, 129, 129);
        font-size: 0.9em;
        text-decoration: none;
    }

    & p{
        color: #fff;
        font-weight: 400;
        font-size: 0.9em;
        text-decoration: none;
    }
`
export const Us = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 150px;
    margin: 30px;
`
export const Logo = styled.div`
    display: flex;
    cursor: default;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: 140px;
    margin-left: 90px;
    margin-top: -10px;
`

export const Title= styled.h1`
font-size: 50px;
background-image: linear-gradient(to right, #3494E6 0%, #EC6EAD  51%, #3494E6  100%);
  -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`

export const Title2 = styled.h2`
  margin-top: -50px;
  margin-left: 38px;
  font-family: "Roboto";
`

export const Links = styled.div`
    color: #fff;
    font-weight: 400;
    font-size: 0.9em;
    text-decoration: none;
    padding-top: 20px;
    & p{
        margin-bottom: -10px;
    }

`