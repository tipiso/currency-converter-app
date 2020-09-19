import React from 'react';

import FormContainer from '../containers/FormContainer';
import Header from '../components/Header';
import styles from './home.module.css';
import HomePageBackground from '../images/HomePageBackground.gif';

export default function Home(props) {

    return (
        <div className={styles.HomePage}>
            <div className={`${styles.Card} ${styles.ContentPadding}`}>
                <Header />
                <FormContainer {...props}> 
                </FormContainer>
            </div>
            {/* <div className={styles.Card}>
                <img className={styles.CardImage} src={HomePageBackground} alt="app img" />
            </div> */}
        </div>
    )
}
