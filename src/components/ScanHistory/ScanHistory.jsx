import React from 'react';
import { SCAN_DATA } from '../../keys';
import { QRCodeSVG } from 'qrcode.react';
import '../GenerateHistory/GenerateHistory.scss'
import DownloadButton from '../DownloadHistoryButton/DownloadHistoryButton';
function ScanHistory() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setData(storedData);
    }, []);

    const handleDeleteItem = (itemToDelete) => {
        const indexToDelete = data.findIndex(item => item === itemToDelete);
        if (indexToDelete !== -1) {
            const newData = [...data];
            newData.splice(indexToDelete, 1);
            setData(newData);
            localStorage.setItem(SCAN_DATA, JSON.stringify(newData));
        }
    };

    return (
        <div className="container">
            <h2 className='history-title'>История cканирования QR-кодов</h2>
            <div className="generate-history">
                {data.map((item, index) => (
                    <div key={`${Date.now()}-${index}`} className="history-item">
                        <QRCodeSVG marginSize={1} value={item} size={150} />
                        <p>{item}</p>
                        <DownloadButton text={item} />
                        <button onClick={() => handleDeleteItem(item)} className="history-btn history-btn_delete">Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScanHistory;