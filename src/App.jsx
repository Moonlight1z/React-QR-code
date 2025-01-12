import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header'
import QRcodeGenertor from './QrCodeGenerator/QrCodeGenerator'
import QRcodeScanner from './QrCodeScanner/QrCodeScanner'
import NotFound from './NotFound/NotFound';
// import GenerateQr from './pages/GenerateQr';
// import ScanQr from './pages/ScanQr';
// import ScanHistory from './pages/ScanHistory';
// import GenerateHistory from './pages/GenerateHistory';
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
          {/* <Route path="/scan-history" element={<ScanHistory />} />
          <Route path="/generate-history" element={<GenerateHistory />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
