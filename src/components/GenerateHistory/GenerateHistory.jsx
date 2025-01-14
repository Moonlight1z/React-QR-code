// GenerateHistory.jsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../keys';
import './GenerateHistory.scss'
import DownloadButton from '../DownloadHistoryButton/DownloadHistoryButton';

function GenerateHistory() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        setData(storedData);
    }, []);

    const handleDeleteItem = (text) => {
        const newData = data.filter(item => item !== text);
        setData(newData);
        localStorage.setItem(GENERATE_DATA, JSON.stringify(newData));
    };

    return (
        <div className="container">
            <div className="generate-history">
                {data.map((text) => (
                    <div key={text} className="history-item">
                        <QRCodeSVG value={text} size={150} />
                        <p>{text}</p>
                        <DownloadButton text={text} />
                        <button onClick={() => handleDeleteItem(text)} className="delete-button">Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GenerateHistory;