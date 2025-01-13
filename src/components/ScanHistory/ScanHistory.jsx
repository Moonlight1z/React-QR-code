import { SCAN_DATA } from '../../keys';

function ScanHistory() {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

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

export default ScanHistory