import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import './QrCodeGenerator.scss';

function QRcodeGenertor() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');


    const OnClickHandler = (event) => {
        setResult(value);
        setValue('');
    };
    const OnChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <>
            <input type="text" value={value} onChange={OnChangeHandler} className="result" placeholder='Введите текст' />
            <button type='button' onClick={OnClickHandler}>Сгенерировать QR</button>
            { result !== '' && <QRCodeSVG value={result} size={200}/>}
        </>
    )
}

export default QRcodeGenertor