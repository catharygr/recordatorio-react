import "./app.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import ReminderForm from "./componentes/ReminderForm";
import ReminderList from "./componentes/ReminderList";

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/recordatorio">
          <ReminderForm />
          <ReminderList />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
