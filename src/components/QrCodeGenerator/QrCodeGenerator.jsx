// QrCodeGenerator.jsx
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Импортируем QRCodeCanvas вместо QRCodeSVG
import { GENERATE_DATA } from '../../keys';
import './QrCodeGenerator.scss';
import '../GenerateHistory/GenerateHistory.scss'
function QRcodeGenerator() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const OnClickHandler = (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки

        if (value.trim() === '') {
            alert('Пожалуйста, введите текст для генерации QR-кода');
            return;
        }

        // Обновляем данные в localStorage
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        const newData = [...prevData, value];
        localStorage.setItem(GENERATE_DATA, JSON.stringify(newData));

        // Обновляем состояние компонента
        setValue('');
        setResult(value);
    };

    const OnChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    const downloadQRCode = () => {
        const canvas = document.getElementById('qr-code-canvas');
        if (canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `qr_${result}.png`;
            link.click();
        }
    };

    return (
        <div className='container'>
            <div className="qr-form">
                <input 
                    className="qr-form__item" 
                    type="text" 
                    value={value} 
                    onChange={OnChangeHandler} 
                    placeholder='Введите текст' 
                />
                <button 
                    className="qr-form__btn" 
                    type='button' 
                    onClick={OnClickHandler}
                >
                    Сгенерировать QR
                </button>
            </div>
            <div className="qr">
                {result !== '' && (
                    <>
                        <QRCodeCanvas marginSize={1} id="qr-code-canvas" value={result} size={250} />
                        <button className='history-btn history-btn_download' onClick={downloadQRCode}>Скачать как PNG</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default QRcodeGenerator;