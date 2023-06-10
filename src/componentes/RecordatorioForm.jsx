import { useState } from "react";

const RecordatorioForm = () => {
  const [recordatorio, setRecordatorio] = useState({
    title: "",
    date: "",
    time: "",
  });
  console.log(recordatorio);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecordatorio((prevRecordatorio) => ({
      ...prevRecordatorio,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar el recordatorio en el almacenamiento local (localStorage)
    localStorage.setItem("recordatorios", JSON.stringify(recordatorio));

    // Limpiar los campos de entrada después de guardar el recordatorio
    setRecordatorio({
      title: "",
      date: "",
      time: "",
    });
  };

  return (
    <form className="recordatorio-form" onSubmit={handleSubmit}>
      <input
        className="recordatorio-input"
        type="text"
        name="title"
        value={recordatorio.title}
        onChange={handleInputChange}
        placeholder="Título del recordatorio"
      />
      <input
        className="recordatorio-input"
        type="date"
        name="date"
        value={recordatorio.date}
        onChange={handleInputChange}
        placeholder="Fecha"
      />
      <input
        className="recordatorio-input"
        type="time"
        name="time"
        value={recordatorio.time}
        onChange={handleInputChange}
        placeholder="Hora"
      />
      <button className="recordatorio-button" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default RecordatorioForm;
