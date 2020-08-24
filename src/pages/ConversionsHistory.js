import React from 'react'
import ConversionHistoryTable from '../containers/ConversionHistoryTable';
import styles from './conversionHistory.module.css';

export default function ConversionsHistory(props) {

    return (
        <div className={styles.ConversionHistoryPage}>
            <ConversionHistoryTable {...props} />
        </div>
    )
}
