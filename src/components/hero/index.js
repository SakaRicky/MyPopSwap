import React from 'react'
import mastercard from '../../Assets/mc_symbol.svg'
import visa from '../../Assets/visa.svg'
import { ConvertCoinForm } from '../ConvertCoinForm';
import styles from './hero.module.css'


export const Hero = () => {
    return (
        <div className={styles.root}>
            
            <div className={styles.info}>

                <h1> Simple & Secure Crypto Exchange </h1>

                <p> The fastest and most secure way to exchange your crypto without registration, limits, and worriness. </p>

                <button> 
                    Get your wallet
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>

                <p> Buy crypto with: </p>

                <div className={styles.pay}>
                
                    <img src = { mastercard } alt="mastercard" />
                    <img src = { visa } alt="visa" />

                </div>

            </div>

            <div className={styles.convert}>

                <ConvertCoinForm />

            </div>
        </div>
    )
}
