import React from "react";

export default function ReminderForm() {
  const [recordatorio, setRecordatorio] = React.useState({
    titulo: "",
    fecha: "",
    hora: "",
  });

  function manejarCrear(evento) {
    const { titulo, fecha, hora } = evento.target;
    evento.preventDefault();
    setRecordatorio({
      titulo: titulo.value,
      fecha: fecha.value,
      hora: hora.value,
    });
  }

  function manejarCancelar(evento) {
    evento.preventDefault();
    setRecordatorio({
      titulo: "",
      fecha: "",
      hora: "",
    });
  }

const mapeo = Object.keys(recordatorio).map((key) => {
  return (
    <div key={key}>
      <p>{key}</p>
      <p>{recordatorio[key]}</p>
    </div>
  );
}


  return (
    <form>
      <div className="container">
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" name="titulo" />
        <label htmlFor="fecha">Fecha</label>
        <input type="date" id="fecha" name="fecha" />
        <label htmlFor="hora">Hora</label>
        <input type="time" id="hora" name="hora" />
        <button onClick={manejarCrear} type="submit">
          Crear
        </button>
        <button onClick={manejarCancelar} type="reset">
          Cancelar
        </button>
        {mapeo}
      </div>
    </form>
  );
}
