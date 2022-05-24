import styled from "styled-components"

const StylesH1 = styled.h1`
    color: red;
    text-align: center;
  
`
export const StyleDiv = styled.div `
  color: black;
  border-radius: 10%;
  display: flex;
  text-align: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 40%;
    flex-direction: column;
    display: flex;
   
  }
`

export const StyledEstu= styled.div `
  color: black;
  margin-top: 20px;
  border: 2px solid orange;
  border-radius: 10%;
  display: inline-flex;
  flex-direction: column;

   
  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
    flex-direction: row;
    display: flex;
    float: right;
    position: relative;
   
  }
`
export const StyledExpe= styled.div `
  color: black;
  margin-top: 20px;
  border: 2px solid violet;
  border-radius: 10%;
  display: inline-flex;
  flex-direction: column;
  

  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
    flex-direction: row;
    display: flex;
    float: right;
    position: relative;
   
  }
   
`
export const StyledCert= styled.div `
  color: black;
  margin-top: 20px;
  border: 2px solid #D3F695;
  border-radius: 10%;
  display: inline-flex;
  flex-direction: column;
  width: 95%;

  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
    flex-direction: row;
    display: flex;
    float: right;
    position: relative;
   
  }
`

export const StyledHab = styled.div `
  color: black;
  margin-top: 20px;
  border: 2px solid #5A0B09;
  border-radius: 10%;
  display: inline-flex;
  flex-direction: column;
  width: 95%;


  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
    flex-direction: row;
    display: flex;
    float: right;
    position: relative;
   
  }

`
export const StyledLi = styled.li `

    list-style: none;
`

export default StylesH1