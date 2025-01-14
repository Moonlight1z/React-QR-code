// DownloadButton.jsx
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../GenerateHistory/GenerateHistory.scss'

const DownloadButton = ({ text }) => {
  const downloadQRCode = () => {
    const canvas = document.getElementById(`qr-canvas-${text}`);
    const pngUrl = canvas.toDataURL('image/png');
    
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${text}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  return (
    <div>

      <QRCodeCanvas id={`qr-canvas-${text}`} value={text} size={150} style={{display: 'none'}} />
      <button className='history-btn history-btn_download' onClick={downloadQRCode}>Скачать как PNG</button>
    </div>
  );
};

export default DownloadButton;