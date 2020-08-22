import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.Navigation}>
          <ul className={styles.NavigationList}>  
            <li className={styles.NavigationListItem}>
              <NavLink className={styles.Link} activeClassName={styles.ActiveLink} exact={true} to="/">Converter form</NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink className={styles.Link} activeClassName={styles.ActiveLink} to="/list">Conversion list</NavLink>
            </li>
          </ul>
        </nav>
    )
}
