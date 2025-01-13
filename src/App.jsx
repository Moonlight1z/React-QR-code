import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import QRcodeGenertor from './components/QrCodeGenerator/QrCodeGenerator'
import QRcodeScanner from './components/QrCodeScanner/QrCodeScanner'
import GenerateHistory from './components/GenerateHistory/GenerateHistory';
import ScanHistory from './components/ScanHistory/ScanHistory';
import NotFound from './components/NotFound/NotFound';

import './App.scss'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<QRcodeGenertor />} />
          <Route path="/scan" element={<QRcodeScanner />} />
          <Route path="/scan-history" element={<ScanHistory />} />
          <Route path="/generate-history" element={<GenerateHistory />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
