import React from 'react'
import styles from './faq.module.css'
import { FaqBox } from './FaqBox'

// Need more styling on FAQ with animations

export const Faq = () =>  {

    const faq = [
        {
            title: "What is a cryptocurrency wallet address?",
            content: "A crypto wallet is an alternative to a physical wallet, which exists only in a digital form. Such a wallet is responsible not only for the safety of your coins, it also includes private and public keys that are necessary for conducting the transactions. Each wallet contains information about the availability of the user's coins."
        },
        {
            title: "How do I get a cryptocurrency wallet address?",
            content: "To get your own cryptocurrency address we recommend visiting the official site of the coin you are interested in. Usually, every coin has an official wallet or a list of recommended wallets. Be careful choosing a wallet and try not to use an unverified service in order to avoid the loss of your coins."
        },
        {
            title: "What is the recipient's address?",
            content: "Let's assume you have Bitcoin and you want to buy Ethereum. The recipient’s address is the wallet address to which ETH will be sent after the exchange. Each cryptocurrency has its own address type. When you enter the recipient’s address make sure you use the correct coin address."
        },
        {
            title: "What is MEMO (or Destination tag, or Payment ID)?",
            content: "There is an additional address feature necessary for identifying a transaction. For different cryptocurrencies it can have different names (MEMO, Destination tag, Payment ID, or Message)."
        },
        {
            title: "What is a transaction hash?",
            content: "Each new transaction committed by users in the blockchain has its own unique ID number (or a transaction hash) that is assigned to the operation and will be stored in all the subsequent new blocks. Using this ID you can view the details of your transaction in the network. The transaction hash is usually displayed as “tx ID” in your wallet."
        },
        {
            title: "How to cancel a cryptocurrency transaction?",
            content: "When a transaction is included in the blockchain, it becomes irreversible. Unfortunately, no one can cancel the transaction. So you have to be extremely careful and re-check all the data you entered before confirming the exchange."
        }
    ]

    return (
        <div className={styles.root}>
            <div className={styles.heading__wrapper}>
                <h2>FAQ</h2>
            </div>
            {faq.map(f => {
                return <FaqBox key={f.title} faq={f} />
            })}
        </div>
    )
}
