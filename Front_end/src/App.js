import './App.css';
import Login from './Component/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Component/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
