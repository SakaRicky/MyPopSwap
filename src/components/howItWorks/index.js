import React from 'react'
import styles from './howItWorks.module.css'

export const HowItWorks = () => {
    
    const data = [
        {
            title: "Choose the crypto exchange pair",
            content: "Assuming you own Etherum (ETH) and want to swap it into Bitcoin (BTC), our job is to do it for you on PopSwap!"
        },
        {
            title: "Enter your crypto wallet address",
            content: "Now you would need to enter the crypto wallet Bitcoin address. Be extremely careful and double-check your BTC address. Your Bitcoins will be sent to this address right after the exchange."
        },
        {
            title: "Done!",
            content: "'Now, you’ll have the amount of Bitcoins you exchanged in your wallet. Spend it or save it how you want!"
        }
    ]

    return (
        <section className={styles.root}>
            <h1>How it works</h1>
            {data.map((data, idx) => {
                return (
                    <div className={styles.box} key={data.title}>
                        <div className={styles.number}>0{idx+1}</div>
                        <div className={styles.text_box}>

                            <h2> { data.title } </h2>
                            <p> { data.content } </p>
                            
                        </div>
                    
                    </div>
                )
            })}
        </section>
    )
}
