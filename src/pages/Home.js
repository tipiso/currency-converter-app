import React from 'react';
import { NavLink } from 'react-router-dom';

import FormContainer from '../containers/FormContainer';
import Header from '../components/Header';
import styles from './home.module.css';

export default function Home(props) {

    return (
        <div className={styles.HomePage}>
            <div className={`${styles.Card} ${styles.ContentPadding}`}>
                <Header />
                    <FormContainer {...props}> 
                </FormContainer>
            </div>
            <div className={styles.CardHidden}>
                <NavLink className={styles.CardHeader} to="/list">Historia</NavLink>
            </div>
        </div>
    )
}
