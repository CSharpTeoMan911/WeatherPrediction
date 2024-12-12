import './App.css';
import Global from './pages/Global';
import London from './pages/London';
import About from './pages/About';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

function App() { 
  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/london" element={<London />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
