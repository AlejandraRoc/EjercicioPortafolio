import React, {Component} from "react";
import StylesH1, { StyledExpe, StyledLi } from "../styles/styles";

//Esto es una estructura de clase 
export default class Experiencia extends Component{
  render() { //Render hace la funcionalibilidad, debe ir entre render y return 
    
    
    
    return(
      <StyledExpe>
        <StylesH1> Experiencia </StylesH1>
          <ul>
            <StyledLi>Avianca: Ateción al usuario</StyledLi>
            <StyledLi>Padduk Solutions: Digitadora</StyledLi>
            <StyledLi>Comisión Nacional del Servicio Civil: Técnico de convocatoria</StyledLi>
            <StyledLi>Db Solution: Soluciones en bases de datos</StyledLi>

          </ul>
      </StyledExpe>
    )
  }
}