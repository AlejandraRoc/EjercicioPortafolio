import React, {Component} from "react";
import  StylesH1, {StyleDiv }from "../styles/styles";
import '../styles/styles.css'




//Esto es una estructura de clase 
export default class Component1 extends Component{
  render() { //Render hace la funcionalibilidad, debe ir entre render y return 
  
    return(
      <StyleDiv>
        <h1>Alejandra Rocha Rojas</h1>
        <img src="https://res.cloudinary.com/df8rbwbwe/image/upload/v1653357014/IMG_20220503_134317_979_ytrisv.webp" id="imgPro" />
        <h4>Desarrolladora Frontend</h4>
        <h6>Bogotá - Colombia</h6>
      </StyleDiv>
    )
  }
}