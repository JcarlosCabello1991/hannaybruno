import React from "react";
import styled from "styled-components";

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const SpanNombre = styled.span`
  text-align: center;
  font-family: 'Montserrat';
  font-style: italic;
  font-size: 20px;
  color: white;
  padding-left:10px;
  padding-right:10px;
`

const ButtonMapa = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: 0px;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: white;
  color: #64272f;
`

function  Ceremonia(){

  return(
    <>
      <ContainerInfo>
        <SpanNombre>Compartirlo con vosotros es lo más importante, ¡esperamos que puedas acompañarnos! Rogamos confirmación, rellenando el formulario que encontrarás al final de esta invitación.</SpanNombre>
      </ContainerInfo>
    </>
  )
}

export default Ceremonia;