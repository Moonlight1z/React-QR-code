import { GENERATE_DATA } from '../../keys';
import { QRCodeSVG } from 'qrcode.react';

function GenerateHistory() {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div>
            {data.map((text) =>
            (<p key={text}>{text}
                <QRCodeSVG value={text} size={150} />
            </p>)
            )}
        </div>
    );
}

export default GenerateHistory