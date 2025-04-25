import styled from "styled-components";
import './fontStyleParagraphs.css'

const SectionHotel = styled.div`
  @font-face {
      font-family: 'Amsterdam';
      src: url('../fonts/Miama.otf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`

const Span = styled.span`
  font-size: 20px;
  font-style: italic;
  font-family: 'Montserrat';
  text-align: justify;
`

const SpanHotel = styled.span`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: #42979d;
`

function Hoteles(){

  return(
    <SectionHotel>
      <p style={{textAlign: 'center', fontSize: '40px', fontWeight: 'bold', color: "white"}}>¡Un abrazo!<br></br>Anna y Bruno</p>
    </SectionHotel>    
  )
}

export default Hoteles;