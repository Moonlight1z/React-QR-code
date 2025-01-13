import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { SCAN_DATA } from '../../keys';
import './QrCodeScanner.scss';

function QRcodeScanner() {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData  = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
    }

    return (
        <div className='container'>
            <Scanner
                onScan={scanHandler}
                components={{
                    audio: false,
                    finder: true,
                }}
                styles={{
                    container: { width: 200 }
                }} // параметр из библиотеки
            /* allowMultiple = allowMultiple={true} - это из библиотеки npm для сканирования */
            />
            <p>Резултат: {scanned}</p>
        </div>

    )
}

export default QRcodeScanner