import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
function QRcodeScanner() {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
    }

    console.log('asdad', scanned);

    return (
        <div>
            <Scanner
                allowMultiple
                onScan={scanHandler}
                components={{
                    audio: true,
                    finder: true,
                }}
                styles={{
                    container: { width: 200, marginLeft: 500 }
                }} // параметр из библиотеки
            /* allowMultiple = allowMultiple={true} - это из библиотеки npm для сканирования */
            />
            <p>{scanned}</p>
        </div>

    )
}

export default QRcodeScanner