import React, { useState } from 'react'
import styles from './faqBox.module.css';

export const FaqBox = ({faq}) => {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleShowQuestion = () => {
        setShowQuestion(!showQuestion)
    }

    const answerStyles = showQuestion ? "0" : "-200%";
    const titleColor = showQuestion ? "#FFE600" : "#fff";
    const icon = showQuestion ? "-" : "+";

    return (
        <div className={styles.faq}>
            <div className={styles.question}>
                <h3
                    style={{
                        color: titleColor
                    }} 
                > { faq.title } </h3>
                <div> <span style={{ color: titleColor }}  className={styles.icon} onClick={handleShowQuestion}> {icon} </span> </div>
            </div>
            <div className={styles.answer__container}>
                <p className={styles.answer} style={{marginTop: answerStyles}}> { faq.content } </p>
            </div>
        </div>
    )
}
