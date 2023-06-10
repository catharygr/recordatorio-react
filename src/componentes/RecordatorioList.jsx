import { Link, Outlet } from "react-router-dom";

function RecordatorioList() {
  // Obtener los recordatorios guardados en el localStorage (si los hay)
  const storedRecordatorios = localStorage.getItem("recordatorios");
  const recordatorios = storedRecordatorios
    ? JSON.parse(storedRecordatorios)
    : [];

  return (
    <div className="recordatorio-list">
      <h2 className="recordatorio-list-title">Lista de recordatorios</h2>
      {recordatorios.length > 0 ? (
        <ul className="recordatorio-list-items">
          {recordatorios.map((recordatorio, index) => (
            <li key={index} className="recordatorio-list-item">
              {recordatorio}
            </li>
          ))}
        </ul>
      ) : (
        <p className="recordatorio-list-empty">
          No hay recordatorios guardados.
        </p>
      )}
    </div>
  );
}

export default RecordatorioList;
