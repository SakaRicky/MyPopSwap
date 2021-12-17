import React, { useState } from 'react'
import styles from './header.module.css'
import logo from '../../Assets/logo.svg'

// Use useRef for navigation (or just classes)
// JSX

export const Header = () => {
    const [showLanguages, setShowLanguages] = useState(false)
    const [showSideMenu, setShowSideMenu] = useState(false)

    const handleShowLanguages = () => {
        setShowLanguages(!showLanguages);
    }

    const handleShowSideMenu = () => {
        setShowSideMenu(!showSideMenu)
    }

    const showLanguagesStyle = showLanguages ? "flex" : "none";
    const showMenuStyle = showSideMenu ? "translateX(0px)" : "translateX(-2000px)";

    return (

        <div>
            {/* Nav to display on smaller screens (700px and down)
            It's out here to position absolute relative to the body and not the 
            header which is already relative to toggle bttun */}
            <nav className={styles.mobile_nav} style={{transform: showMenuStyle}}>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShowSideMenu} className={styles.closeMenuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <a className={styles.nav__link} href="#"> How it works</a>
                </li>
                <li className={styles.nav__item}>
                    <a className={styles.nav__link} href="#"> FAQ </a>
                </li>
                <li className={`${styles.nav__item} ${styles.dropdown}`}>
                    <div className={styles.dropdown__label} onClick={handleShowLanguages}>
                        Languages
                        <span id='down' className="material-icons">keyboard_arrow_down</span>
                    </div>
                    
                    <div style={{display: showLanguagesStyle, transition: "all 100ms ease-in-out"}} className={styles.dropdown__content}>
                        <a className={styles.nav__link} href="#">English</a>
                        <a className={styles.nav__link} href="#">French</a>
                    </div> 
                </li>
                <li className={styles.nav__item}> <a className={`${styles.nav__link} ${styles.connect}`} href="#"> Connect Wallet </a> </li>
            </ul>
        </nav>


            <header className={styles.header}>

                <div className={styles.toggleIcon} onClick={handleShowSideMenu}>
                    <span></span>
                    <span></span>
                </div>
                
                <a href="#">
                    <img src = { logo } alt="logo" />
                </a>

                
                {/* Nav to display on bigger screens (700px and up) */}
                <nav className={styles.nav}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <a className={styles.nav__link} href="#"> How it works</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a className={styles.nav__link} href="#"> FAQ </a>
                        </li>
                        <li className={`${styles.nav__item} ${styles.dropdown}`}>
                            <div className={styles.dropdown__label} onClick={handleShowLanguages}>
                                Languages
                                <span id='down' className="material-icons">keyboard_arrow_down</span>
                            </div>
                            
                            <div style={{display: showLanguagesStyle, transition: "all 100ms ease-in-out"}} className={styles.dropdown__content}>
                                <a className={styles.nav__link} href="#">English</a>
                                <a className={styles.nav__link} href="#">French</a>
                            </div> 
                        </li>
                    </ul>
                </nav>
                <a className={`${styles.nav__link} ${styles.cta}`} href="#"> Connect Wallet </a>
            </header>
        </div>
    )
}
