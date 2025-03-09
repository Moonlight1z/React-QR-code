import './Header.scss'
// import logo from '../Header/img/logo.svg'
import logo from '../Header/img/logo-up.png'
import createQR from '../Header/img/create.png'
import readQR from '../Header/img/scan.png'
import storyGenerationQR from '../Header/img/history-generation.png'
import storyScanQR from '../Header/img/history-scan.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen); // В зависимости от союытий прнимает true или flase (открыть или закрыть меню, см 17 строку)
    };
    return (

        <header className={`header ${isOpen ? 'open' : ''}`}>
        <div className="header-container">
          <nav className='navigation-box'>
            <button className="burger-btn" onClick={toggleMenu}>
              <span></span><span></span><span></span>
            </button>
            <Link to="/React-QR-code/" onClick={() => setIsOpen(false)}>
              <img src={logo} width={80} height={80} alt="logo" />
            </Link>
            <div className='navigation'>
              <Link to="/React-QR-code/generate" className='navigation__item' onClick={() => setIsOpen(false)}>
                <img src={createQR} alt="createQR" width={25} height={25} />
                Сгенерировать QR-code
              </Link>
              <Link to="/React-QR-code/scan" className='navigation__item' onClick={() => setIsOpen(false)}>
                <img src={readQR} alt="readQR" width={25} height={25} />
                Сканировать QR-code
              </Link>
              <Link to="/React-QR-code/scan-history" className='navigation__item' onClick={() => setIsOpen(false)}>
                <img src={storyGenerationQR} alt="storyQR" width={25} height={25} />
                История сканирования
              </Link>
              <Link to="/React-QR-code/generate-history" className='navigation__item' onClick={() => setIsOpen(false)}>
                <img src={storyScanQR} alt="storyQR" width={25} height={25} />
                История генерирования
              </Link>
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Header