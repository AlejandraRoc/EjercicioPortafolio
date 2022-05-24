import React, {Component} from "react";
import StylesH1, { StyledEstu, StyledLi } from "../styles/styles";
import '../styles/styles.css'

//Esto es una estructura de clase 
export default class Estudios extends Component{
  render() { //Render hace la funcionalibilidad, debe ir entre render y return 
    
    return(
      <StyledEstu>
        <StylesH1> Mis Estudios </StylesH1>
          <ul>
            <StyledLi> Sena - Técnico en programación de Software</StyledLi>
            <StyledLi> Sena/Avianca - Técnico en servicios comerciales y aeroportuarios</StyledLi>
            <StyledLi> Scrum Study - Scrum Fundamentals Certified</StyledLi>
          </ul>
      </StyledEstu>
    )
  }
}