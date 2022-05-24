import React, {Component} from "react";
import StylesH1, { StyledHab, StyledLi } from "../styles/styles";

//Esto es una estructura de clase 
export default class Habilidades extends Component{
  render() { //Render hace la funcionalibilidad, debe ir entre render y return 
    
    
    
    return(
      <StyledHab>
        <StylesH1> Habilidades </StylesH1>
        <ul>
          <StyledLi> Html </StyledLi>
          <StyledLi> Css </StyledLi>
          <StyledLi> Javascript </StyledLi>
          <StyledLi> ReactJS </StyledLi>
        </ul>
      </StyledHab>
    )
  }
}