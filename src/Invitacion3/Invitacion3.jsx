import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Schedule from "./Schedule";
import Ceremonia from "./Ceremonia";
import Formulario from "./Formulario";
import ModalComponent from "./Modal/Modal";
import ReactAudioPlayer from 'react-audio-player';
import './fontStyleParagraphs.css'


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #64272f;
`

const ImageBride = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
`

const DivDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 10px;
`

const DateSpan = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 50px;
  color: white;
  width: 75px;
  text-align: center;
`
const DateSpanWord = styled.span`
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 30px;
  color: white;
  width: 75px;
  text-align: center;
`

const SpanText = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 50px;
  padding: 10px 15px;
  text-align: center;
  color: white;
`

const SpanTextInfo = styled.span`
  font-family: 'Montserrat';
  font-style:italic;
  font-size: 20px;
  padding: 10px 20px;
  text-align: center;
  color: white;
`
    
  
const SpanTextYes = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 40px;
  padding: 10px 20px;
  text-align: center;
  color: white;
`
const SpanTextSave = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 70px;
  padding: 10px 15px;
  text-align: center;
  margin-top: 10px;
  color: white;
`

function Invitacion3() {

  const fechaObjetivo = new Date(Date.UTC(2025, 9, 25, 18, 0, 0));

  const [date, setDate] = useState({
    dias: "",
    horas:"", 
    minutos:"",
    segundos:""
  });
  const [showNotice, setShowNotice] = useState(true);
  const audioRef = useRef(null);

  const actualizarContador = () => {
    const ahora = new Date();

    // Calcula la diferencia en milisegundos entre las fechas
    const fechaObjetivoLocal = new Date(fechaObjetivo.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
    const diferencia = fechaObjetivoLocal.getTime() - ahora.getTime();

    if (diferencia <= 0) {
        // Si la fecha objetivo ha pasado, muestra un mensaje o realiza alguna acción
        console.log('Ya ha pasado la fecha objetivo.');
        return;
    }

    let segundosTotales = Math.floor(diferencia / 1000);
    let segundos = segundosTotales % 60;

    let minutosTotales = Math.floor(segundosTotales / 60);
    let minutos = minutosTotales % 60;

    let horasTotales = Math.floor(minutosTotales / 60);
    let horas = horasTotales % 24;

    let dias = Math.floor(horasTotales / 24);
    setDate({
      dias: dias.toString(),
      horas: horas.toString(),
      minutos: minutos.toString(),
      segundos: segundos.toString()
    })

  };

  setInterval(actualizarContador, 1000);

  useEffect(() => {
    actualizarContador();
    //eslint-disable-next-line
  },[]);

  useEffect(() => {
    if(audioRef.current != null && !showNotice){
      audioRef.current.audioEl.current.play()
    }
  },[showNotice]);

  return(
    <Container>
      {
        showNotice && <ModalComponent setShowNotice={setShowNotice} showNotice={showNotice}/>
      }
      <span style={{color:'#FFBD59', fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginTop: '30px', fontFamily:'Amoresa', fontStyle: 'italic'}}>Bienvenidos</span>
      <SpanTextSave>Save the date</SpanTextSave>
      <div style={{display: 'flex', justifyContent: 'center', width: 'auto', marginBottom: '30px'}}>
        <ReactAudioPlayer 
          ref={audioRef}
          src='../../../marryyoucorta.mp3'
          autoPlay={false}
          controls
          progressDisplay="none"
          />
      </div>
      <DivDate>
        <DateSpan>{date.dias}</DateSpan>
        <DateSpan>{date.horas}</DateSpan>
        <DateSpan>{date.minutos}</DateSpan>
        <DateSpan>{date.segundos}</DateSpan>
      </DivDate>
      <DivDate>
        <DateSpanWord>Días</DateSpanWord>
        <DateSpanWord>horas</DateSpanWord>
        <DateSpanWord>Min</DateSpanWord>
        <DateSpanWord>Seg</DateSpanWord>
      </DivDate>
      <ImageBride src="../../../nocturno.jpeg" alt="novios"/>
      <SpanText>
        ¡Nos casamos!
      </SpanText>
      <SpanTextInfo>
        Y si te ha llegado esta invitación es porque queremos que seas parte de este día tan especial para nosotros, esperamos que nos acompañes en nuestro
      </SpanTextInfo>
      <SpanTextYes>¡Sí quiero!</SpanTextYes>
      <SpanTextInfo>
        el próximo día 25 de octubre de 2025.
      </SpanTextInfo><br></br>
      <SpanTextInfo>La ceremonia tendrá lugar en el Complejo El Olivar, en Alcalá de Henares. Después, lo celebraremos como merece la ocasión con una gran fiesta en el mismo sitio.!</SpanTextInfo>
      <Schedule/>
      <Ceremonia/>
      <Formulario/>
    </Container>
  )
}

export default Invitacion3