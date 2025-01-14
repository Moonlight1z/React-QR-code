// GenerateHistory.jsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../keys';
import './GenerateHistory.scss'
import DownloadButton from '../DownloadHistoryButton/DownloadHistoryButton';

function GenerateHistory() {
    const [data, setData] = React.useState(JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'));

    const handleDeleteItem = (text) => {
        // Фильтруем массив, оставляя только элементы, которые не равны тексту
        const newData = data.filter(item => item !== text);

        // Обновляем состояние и localStorage
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
                        <button onClick={() => handleDeleteItem(text)} className="history-btn history-btn_delete">Удалить</button>
                    </div>
                ))}
            </div>

            <div className='container'>
                {data.map((text) =>
                (<p key={text}>{text}
                    <QRCodeSVG value={text} size={150} />
                </p>)
                )}
            </div>
        </div>
    );
};

export default GenerateHistory;