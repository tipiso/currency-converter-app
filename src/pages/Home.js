import React from 'react'
import FormContainer from '../containers/FormContainer';
import styles from './home.module.css';
import HomePageBackground from '../images/HomePageBackground.gif';

export default function Home(props) {

    return (
        <div className={styles.HomePage}>
            <div className={styles.Card}>
                <FormContainer {...props}> 
                </FormContainer>
            </div>
            <div className={styles.Card}>
                <img className={styles.CardImage} src={HomePageBackground} />
            </div>
        </div>
    )
}
