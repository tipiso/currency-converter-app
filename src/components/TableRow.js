import React from 'react';
import classNames from 'classnames';

import styles from './tableRow.module.css';

export default function TableRow(props) {
    const { index, item } = props;
    const indexEven = index % 2 === 0 ? true : false;
    const darkCellClassnames = classNames([styles.Td, styles.DarkGrayBg]);
    const indexCellClassnames = classNames([styles.Td, styles.IndexTd, !indexEven &&  styles.DarkBg]);

    return (
        <tr className={styles.TableRow}>
            <td className={indexCellClassnames}>{index + 1}.</td>
            <td className={`${styles.Td}`}>{item.initialCurrencyName}</td>
            <td className={darkCellClassnames}>{item.initialCurrencyAmount}</td>
            <td className={styles.Td}>{item.targetCurrencyName}</td>
            <td className={darkCellClassnames}>{item.targetCurrencyValue}</td>
            <td className={styles.Td}>{item.conversionDate}</td>
        </tr>
    )
}
