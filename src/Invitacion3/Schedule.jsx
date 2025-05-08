import React from "react";
import styled from "styled-components";

const SpanScheduleNew = styled.span`
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  text-align: center;
  font-size: 40px;
  color: white;
  margin-top: 10px;
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
const ImageBride = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
`
const ImageSchedule = styled.img`
  width: 120px;
  height: 120px;
`

function Schedule(){

  const goToMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Complejo+El+Olivar/@40.5019804,-3.3925913,16z/data=!3m1!4b1!4m6!3m5!1s0xd424987d61d3dc7:0x729df944b22a8d55!8m2!3d40.5019763!4d-3.3900164!16s%2Fg%2F1tvyn2hc?hl=es_419&entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, '_blank');
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <ButtonMapa onClick={() => {goToMaps()}}>Ver en mapa</ButtonMapa>
    <ImageBride src="../../../abrazo.jpeg" alt="novios"/>
    <SpanScheduleNew style={{textAlign: 'center', paddingLeft: '10px', paddingRight: '20px', color: "white", fontWeight: 'bold'}}>Plan del día:</SpanScheduleNew>
    {/* <SpanScheduleNew style={{textAlign: 'center', paddingLeft: '10px', paddingRight: '20px', fontFamily:'Montserrat', fontSize: '20px', fontStyle: 'italic', color:'white'}}>Salida a las <strong>12:15</strong> desde el parking del parador de La Granja. Por favor, sed puntuales, os lleva Segobus</SpanScheduleNew> */}
    <SpanScheduleNew>Ceremonia - 18:00</SpanScheduleNew>
    <ImageSchedule src="../../ceremoniacat.webp"/>
    <SpanScheduleNew>Cocktail - 18:45</SpanScheduleNew>
    <ImageSchedule src="../../coctailcat.webp"/>
    <SpanScheduleNew>Banquete - 20:15</SpanScheduleNew>
    <ImageSchedule src="../../comida.webp"/>
    {/* <ImageSchedule src="../../Icono-banquete_sin-fondo.png"/> */}
    <SpanScheduleNew>Fiesta...¡Hasta que te canses!</SpanScheduleNew>
    <ImageSchedule src="../../perro.webp"/>
    <SpanScheduleNew style={{fontSize: '25px', fontStyle: 'italic'}}>(En realidad hasta las 04:00 a.m)</SpanScheduleNew>
    {/* <ImageSchedule src="../../Icono-fiesta_sin-fondo.png"/> */}
    {/* <SpanScheduleNew style={{textAlign: 'center', paddingLeft: '10px', paddingRight: '10px', fontFamily:'Montserrat', fontSize: '20px', fontStyle: 'italic'}}>Bus de regreso a<br></br> La Granja - 01:10</SpanScheduleNew> */}
    <br></br>
    </div>
  )
}

export default Schedule;