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
            <div className='qr-form'>
                <input className='qr-form__item' type="text" value={value} onChange={OnChangeHandler} placeholder='Введите текст' />
                <button className='qr-form__btn' type='button' onClick={OnClickHandler}>Сгенерировать QR</button>
            </div>
            <div className='qr'>
                {result !== '' && <QRCodeSVG value={result} size={250} />}
            </div>
        </div>
    )
}

export default QRcodeGenertor