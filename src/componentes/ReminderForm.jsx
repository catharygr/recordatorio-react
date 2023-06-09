import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

export default function ReminderForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reminder = {
        title,
        description,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };

      // Guardar el recordatorio en Firebase Firestore
      await firebase.firestore().collection("reminders").add(reminder);

      // Redireccionar al componente de lista de recordatorios
      history.push("/reminders");
    } catch (error) {
      console.error("Error al guardar el recordatorio:", error);
    }
  };

  return (
    <div>
      <h2>Agregar Recordatorio</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
