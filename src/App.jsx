import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Main from "./components/Main";
import Passcode from "./components/Passcode";
import Invitation from "./components/greetings/Invitation";
import Congrats from "./components/greetings/Congrats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/d-journey/" element={<Main />} />
        <Route path="/d-journey/login" element={<Passcode />} />
        <Route path="/d-journey/invitation" element={<Invitation />} />
        <Route path="/d-journey/congrats" element={<Congrats />} />
      </Routes>
    </Router>
  )
}

export default App