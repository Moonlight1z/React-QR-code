import './Header.scss'
import logo from '../Header/img/logo.svg'
import createQR from '../Header/img/create.png'
import readQR from '../Header/img/scan.png'
import storyGenerationQR from '../Header/img/history-generation.png'
import storyScanQR from '../Header/img/history-scan.png'
import React, { useState } from 'react';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (

        <header className={`header ${isOpen ? 'open' : ''}`}>
            <div className="header-container">
                <nav className='navigation-box'>
                    <button className="burger-btn" onClick={toggleMenu}>
                        <span></span><span></span><span></span>
                    </button>
                    <a href="#" onClick={(e) => {e.preventDefault();setIsOpen(false);}}>
                        <img src={logo} alt="logo" />
                    </a>
                    <div className='navigation'>
                        <a href="#" className='navigation__item' onClick={(e) => {e.preventDefault();setIsOpen(false);}}>
                            <img src={createQR} alt="createQR" width={25} height={25} />
                            Сгенерировать QR-code
                        </a>
                        <a href="#" className='navigation__item' onClick={(e) => {e.preventDefault();setIsOpen(false);}}>
                            <img src={readQR} alt="readQR" width={25} height={25} />
                            Сканировать QR-code
                        </a>
                        <a href="#" className='navigation__item' onClick={(e) => {e.preventDefault();setIsOpen(false);}}>
                            <img src={storyGenerationQR} alt="storyQR" width={25} height={25} />
                            История сканирования
                        </a>
                        <a href="#" className='navigation__item' onClick={(e) => {e.preventDefault();setIsOpen(false);}}>
                            <img src={storyScanQR} alt="storyQR" width={25} height={25} />
                            История генерирования
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header