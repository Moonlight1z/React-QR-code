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
          <Route path="/React-QR-code/" element={<Home />} />
          <Route path="/React-QR-code/generate" element={<QRcodeGenertor />} />
          <Route path="/React-QR-code/scan" element={<QRcodeScanner />} />
          <Route path="/React-QR-code/scan-history" element={<ScanHistory />} />
          <Route path="/React-QR-code/generate-history" element={<GenerateHistory />} />

          <Route path="/React-QR-code*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
