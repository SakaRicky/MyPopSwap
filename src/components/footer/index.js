import React from 'react'
import styles from './footer.module.css'

import discord from '../../Assets/discord-svgrepo-com.svg'
import twitter from '../../Assets/twitter-svgrepo-com.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.footer__description}>
                <h1> Pop<span>Swap</span></h1>
                <p>
                    Popcorn Swap is decentralized exchange(DEX) 
                    Dex are a type of cryptocurrency exchange which allows for direct peer-to-peer cryptocurrency transactions to take place online securely and without the need for an intermediary.
                </p>
                <div className={styles.footer__socials}>
                    <img src= { discord } alt="" />
                    <img src= { twitter } alt="" />
                </div>
            </div>
            
            <div className={styles.footer__links}>
                <div>
                    <h3 className={styles.footer__header}> Pages </h3>
                    <a href='/'> Connect wallet </a>
                    <a href='/'> How it works </a>
                    <a href='/'> FAQ </a>
                    <a href='/'> White Page </a>
                </div>

                <div>
                    <h3 className={styles.footer__header}> Social Media </h3>
                    <a href='/'> Discord </a>
                    <a href='/'> Twitter </a>
                </div>

                <div>
                    <h3 className={styles.footer__header}> Version </h3>
                    <h4> 1.0.0 </h4>
                </div>
            </div>
                
        </footer>

    )
}
