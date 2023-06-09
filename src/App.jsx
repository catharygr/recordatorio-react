import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import "firebase/firestore";
import ReminderForm from "./componentes/ReminderForm";
import ReminderList from "./componentes/ReminderList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReminderForm />} />
        <Route path="/reminders" element={<ReminderList />} />
      </Routes>
    </BrowserRouter>
  );
}
