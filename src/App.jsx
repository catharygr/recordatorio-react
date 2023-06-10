import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import RecordatorioList from "./componentes/RecordatorioList";
import RecordatorioForm from "./componentes/RecordatorioForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Lista de Recordatorios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nuevo" className="nav-link">
                Crear Recordatorio
              </Link>
            </li>
          </ul>
        </nav>

        <div className="app-content">
          <Outlet />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<RecordatorioList />} />
        <Route path="/nuevo" element={<RecordatorioForm />} />
      </Routes>
    </Router>
  );
}

export default App;
