import React from 'react';
import styles from './tableRow.module.css';

export default function TableRow(props) {
    const { index, item } = props;
    const indexEven = index % 2 === 0 ? true : false;

    return (
        <tr className={styles.TableRow}>
            <td className={!indexEven ? `${styles.Td} ${styles.IndexTd} ${styles.DarkBg}` : `${styles.Td} ${styles.IndexTd}`}>{index + 1}.</td>
            <td className={`${styles.Td}`}>{item.initialCurrencyName}</td>
            <td className={`${styles.Td} ${styles.DarkGrayBg}`}>{item.initialCurrencyAmount}</td>
            <td className={styles.Td}>{item.targetCurrencyName}</td>
            <td className={`${styles.Td} ${styles.DarkGrayBg}`}>{item.targetCurrencyValue}</td>
            <td className={styles.Td}>{item.conversionDate}</td>
        </tr>
    )
}
