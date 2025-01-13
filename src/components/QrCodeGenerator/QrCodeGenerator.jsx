import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { GENERATE_DATA } from '../../keys';
import './QrCodeGenerator.scss';

function QRcodeGenertor() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');


    const OnClickHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        if (value !== '') localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))


        setResult(value);
        setValue('');
    };

    const OnChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className='container'>
            <input type="text" value={value} onChange={OnChangeHandler} className="result" placeholder='Введите текст' />
            <button type='button' onClick={OnClickHandler}>Сгенерировать QR</button>
            {result !== '' && <QRCodeSVG value={result} size={200} />}
        </div>
    )
}

export default QRcodeGenertor