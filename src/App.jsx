import { useState } from 'react'
import QRcodeGenertor from './QrCodeGenerator/QrCodeGenerator'
import Header from './Header/Header'
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <QRcodeGenertor />
    </>
  )
}

export default App
