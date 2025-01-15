import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../keys';
import './GenerateHistory.scss';
import DownloadButton from '../DownloadHistoryButton/DownloadHistoryButton';

function GenerateHistory() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        setData(storedData);
    }, []);

    const handleDeleteItem = (itemToDelete) => {
        // Находим индекс элемента, который нужно удалить
        const indexToDelete = data.findIndex(item => item === itemToDelete);
        if (indexToDelete !== -1) {
            const newData = [...data]; // Создаем копию массива
            newData.splice(indexToDelete, 1); // Удаляем элемент по индексу
            setData(newData);
            localStorage.setItem(GENERATE_DATA, JSON.stringify(newData));
        }
    };

    return (
        <div className="container">
            <h2 className='history-title'>История генерирования QR-кодов</h2>
            <div className="generate-history">
                {data.map((item, index) => (
                    <div key={`${Date.now()}-${index}`} className="history-item">
                        <QRCodeSVG value={item} size={150} />
                        <p>{item}</p>
                        <DownloadButton text={item} />
                        <button onClick={() => handleDeleteItem(item)} className="history-btn history-btn_delete">Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GenerateHistory;