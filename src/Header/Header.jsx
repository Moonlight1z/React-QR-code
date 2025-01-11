import './Header.scss'
import logo from '../Header/img/logo.svg'
import createQR from '../Header/img/plus.gif'
import readQR from '../Header/img/read.gif'
import storyQR from '../Header/img/history.gif'

function Header() {

    return (
        <header className='header'>
            <div className="header-container">
                <nav className='navigation-box'>
                    <img src={logo} alt="logo" />
                    <ul className='navigation'>
                        <li className='navigation__item'>
                            <img src={createQR} alt="createQR" width={20} height={20} />
                            <a href="#">Сгенерировать QR-code</a>
                        </li>
                        <li className='navigation__item'>
                            <img src={readQR} alt="readQR" width={20} height={20} />
                            <a href="#">Сканировать QR-code</a>
                        </li>
                        <li className='navigation__item'>
                            <img src={storyQR} alt="storyQR" width={20} height={20} />
                            <a href="#">История сканирования </a>
                        </li>
                        <li className='navigation__item'>
                            <img src={storyQR} alt="storyQR" width={20} height={20} />
                            <a href="#">История генерирования</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header