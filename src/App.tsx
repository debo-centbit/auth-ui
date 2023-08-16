import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login.component";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
