import React from 'react';
import './index.css';
import Global from './pages/Global';
import About from './pages/About';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import PDFviewer from './components/PDFviewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Global />} />
      <Route path="/about" element={<About />} />
      <Route path='/pdf' element={<PDFviewer />} />
    </Routes>
  </BrowserRouter>
);


