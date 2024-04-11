import React, { useState } from 'react';
import PDF from "./components/PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  const [titulo, setTitulo] = useState(false);
  const [descripcion, setDescripcion] = useState(false);
  const [autor, setAutor] = useState(false);
  const [imagen, setImagen] = useState(false);
  const [mostrarCheckbox, setMostrarCheckbox] = useState(false);
  const [crearPdfInteractivo, setCrearPdfInteractivo] = useState(false);

  const handleCrearPdfInteractivoClick = () => {
    setMostrarCheckbox(true);
    setCrearPdfInteractivo(true);
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: '#007bff' }}>Ejemplo React PDF</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <PDFDownloadLink document={<PDF titulo={titulo} descripcion={descripcion} autor={autor} imagen={imagen} />} fileName="myfirstpdf.pdf">
          {({ loading }) =>
            loading ? (
              <button style={{ color: '#007bff', padding: '10px', borderRadius: '5px' }}>Cargando documento...</button>
            ) : (
              <button className="btn btn-primary" style={{ marginRight: '10px', padding: '10px', borderRadius: '5px' }}>¡Descargar ahora!</button>
            )
          }
        </PDFDownloadLink>

        <button className="btn btn-secondary" style={{ padding: '10px', borderRadius: '5px' }} onClick={handleCrearPdfInteractivoClick}>Crear PDF INTERACTIVO</button>

      </div>
      {mostrarCheckbox && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label style={{ marginBottom: '5px' }}><input type="checkbox" id="titulo" name="titulo" checked={titulo} onChange={() => setTitulo(!titulo)} />Agregar Título</label>
              <label style={{ marginBottom: '5px' }}><input type="checkbox" id="descripcion" name="descripcion" checked={descripcion} onChange={() => setDescripcion(!descripcion)} />Agregar Descripción</label>
              <label style={{ marginBottom: '5px' }}><input type="checkbox" id="autor" name="autor" checked={autor} onChange={() => setAutor(!autor)} />Agregar Autor</label>
              <label style={{ marginBottom: '5px' }}><input type="checkbox" id="imagen" name="imagen" checked={imagen} onChange={() => setImagen(!imagen)} />Agregar Imagen</label>
            </div>
          </div>
        )}
      
      <p style={{ marginBottom: '20px' }}><strong>Autor:</strong> Andrés Daniel Moreno Prieto</p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PDFViewer style={{ width: '80vw', height: '80vh', border: '1px solid #ccc' }}>
          <PDF titulo={titulo} descripcion={descripcion} autor={autor} imagen={imagen} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
