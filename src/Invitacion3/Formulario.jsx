import React from "react";
import styled from "styled-components";


const SpanNombre = styled.span`
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 40px;
  max-width: 430px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`

const ImageBride = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
`

function Formulario(){

  return(
    <>
      <SpanNombre>
        <span style={{fontFamily: "Montserrat", fontSize: '20px', fontStyle: 'italic', color:'white', display: 'block'}}>Vuestra presencia es el mayor regalo y si queréis tener un detalle con nosotros:
        <br></br></span>
        <span style={{fontFamily:'sans-serif', fontSize:'20px', fontStyle:'italic', color:'white'}}>Nº de cuenta:<br></br> ES93 01280046800100091877</span><br></br>
        <ImageBride src="../../../playa.jpeg" alt="novios"/><br></br>
        <span style={{color: "white"}}>No olvides rellenar el formulario</span>
      </SpanNombre>
    </>
  )
}

export default Formulario;