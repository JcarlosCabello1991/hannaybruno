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

function Hoteles(){

  return(
    <SectionHotel>
      <p style={{textAlign: 'center', fontSize: '40px', fontWeight: 'bold', color: "white"}}>¡Un abrazo!<br></br>Anna y Bruno</p>
    </SectionHotel>    
  )
}

export default Hoteles;