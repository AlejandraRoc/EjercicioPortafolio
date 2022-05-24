import React, {Component} from "react";
import StylesH1, { StyledCert, StyledLi } from "../styles/styles";

//Esto es una estructura de clase 
export default class Certificaciones extends Component{
  render() { //Render hace la funcionalibilidad, debe ir entre render y return 
    
    
    
    return(
      <StyledCert>
        <StylesH1> Certificaciones </StylesH1>
          <ul>
            <StyledLi> Sena: Inglés Básico </StyledLi>
            <StyledLi> Scrum: Scrum Fundamentals Certified </StyledLi>
            <StyledLi> Html Css </StyledLi>
          </ul>
      </StyledCert>
    )
  }
}