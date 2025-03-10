// import { Scanner } from '@yudiel/react-qr-scanner';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { SCAN_DATA } from '../../keys';
import './QrCodeScanner.scss';
import copy from './img/copy.png'

function QRCodeScanner() {
  const [scanned, setScanned] = useState('');
  const [copied, setCopied] = useState(false);

  const scanHandler = (result) => {
    if (!result) return;

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    // Проверка, был ли уже отсканирован данный QR-код
    if (prevData.includes(result.text)) {
      alert('Этот QR-код уже был отсканирован.');
      return;
    }


    setScanned(result.text);

    localStorage.setItem(
      SCAN_DATA, JSON.stringify([...prevData, result.text])
    );
  };

  const handleCopyClick = () => {
    if (!scanned.trim()) {
      alert('Пожалуйста, сканируйте QR-код перед копированием.');
      return;
    }

    navigator.clipboard.writeText(scanned).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }).catch(err => {
      console.error('Ошибка при копировании:', err);
      alert('Не удалось скопировать текст. Попробуйте еще раз.');
    });
  };


  return (
    <div className="container">
      <div className='qr-scanner'>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          scanDelay={1000}
          onResult={scanHandler}
          containerStyle={{ width: '380px' }}
          className='qr-scanner__item'
        />
        <div className='qr-scanner__copy-text'>
          <p className='result'>Результат сканирования:</p>
          {scanned && (
            <>
              <p>{scanned}</p>
              <img
                src={copy}
                alt="copy"
                width={25}
                height={25}
                onClick={handleCopyClick}
                style={{ cursor: 'pointer' }}
              />
            </>
          )}
          {copied && (
            <div className='copied-message'>Текст скопирован!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QRCodeScanner;