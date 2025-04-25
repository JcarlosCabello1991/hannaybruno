import './App.css';
import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Invitacion3 from './Invitacion3/Invitacion3';
import TextField from '@mui/material/TextField';
import Hoteles from './Invitacion3/Hoteles';

function App() {
  const [formData, setFormData] = useState({
    invitados: '',
    asistencia: '',
    cancionSugerida: '',
    intolerancias: 'No', 
    mensaje: ''
  });
  const [showDialog, setShowDialog] = useState(false);
  const [charging, setCharging] = useState(false);
  const [textDialog, setTextDialog] = useState("Guardado correctamente!")
  const [showAdvertise, setShowAdvertise] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (formData.asistencia !== "" && formData.cancionSugerida !== "" && formData.intolerancias !== "" && formData.invitados !== ""){
      try {
        setShowAdvertise(false)
        setShowDialog(true);
        setCharging(true);
        const postUser = await fetch("https://annaybrunoback.vercel.app/invitados/invitado", {
          method:"POST",
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(formData)
        })

        if(postUser.status === 200){
          setFormData({
            invitados: '',
            asistencia: '',
            cancionSugerida: '',
            intolerancias: 'No',
            mensaje: ''
          });
          setCharging(false);
          setTextDialog("Guardado correctamente!")
        } else {
          setTextDialog("Ocurrió un error! Lo sentimos")
        }
        
      } catch (error) {
        setTextDialog("Ocurrió un error! Lo sentimos")
        console.error('Error al enviar los datos:', error);
      }
    } else {
      setShowAdvertise(true)
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: '430px !important',
    bgcolor: '#64272f',
    border: '2px solid #64272f',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'10px',
  };

  const onClose = () => {
    setShowDialog(false);
  };

  const dialog = (
    <div>
    <Modal
      open={showDialog}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {
          charging ? 
          <CircularProgress/> :
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#64272f', width: '100%', color: 'white'}}>
            <p style={{fontSize: '32px', textAlign: 'center'}}>
              {textDialog}
            </p>
            <button onClick={onClose} style={{backgroundColor: '#8c4952', border: '0px', borderRadius: '5px', color: 'white', marginLeft:'50px', marginRight: '50px'}}>Aceptar</button>
          </div>       
        }
      </Box>
    </Modal>
  </div>
  );

  const formulario = (
    <div style={{backgroundColor: '#8c4952', paddingTop: '20px', paddingBottom: '20px', fontFamily: 'Montserrat', fontSize: '16px'}}>
      {/* {showDialog && dialog} */}
      {dialog}
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Nombre del Invitado:</label>
        <input type="text" name="invitados" value={formData.invitados} onChange={handleChange} style={{fontFamily:'sans-serif'}}/>
      </div>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Asistencia:</label>
        <select name="asistencia" value={formData.asistencia} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Qué canción tiene que sonar sí o sí:</label>
        <input type="text" name="cancionSugerida" value={formData.cancionSugerida} onChange={handleChange} style={{fontFamily:'sans-serif'}}/>
      </div>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Si tienes alguna intolerancia alimentaria, indícanos cúal </label>
        <input type="text" name="intolerancias" value={formData.intolerancias} onChange={handleChange} style={{fontFamily:'sans-serif'}}/>
      </div>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <TextField
          id="outlined-multiline-static"
          label="Mensaje para los novios"
          multiline
          rows={4}
          name='mensaje'
          defaultValue={formData.mensaje}
          onChange={handleChange}
          style={{backgroundColor: 'white'}}
        />
      </div>
      <br></br>
      {showAdvertise && <div style={{width: '100%',color: 'red', textAlign: 'center', marginBottom: '20px'}}>Debes rellenar todos los campos</div>}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button onClick={handleSubmit} style={{backgroundColor: 'white', border: '0px', borderRadius: '5px', color: 'black', width: '100px', height: '30px'}}>Enviar</button>
      </div>      
      <br></br>
    </div>    
  );
  return (
    <div className="App">
      <Invitacion3/>
      {formulario}
      <Hoteles/>
    </div>
  );
}

export default App;
