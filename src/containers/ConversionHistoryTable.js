import React from 'react'
import TableRow from '../components/TableRow';
import Header from '../components/Header';
import Button from '../components/Button';
import styles from './conversionHistoryTable.module.css';

export default function ConversionHistoryTable(props) {

    return (
        <>
        <Header />
        { 
            (Array.isArray(props.conversionsList) && props.conversionsList.length > 0)   ?
            <>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <th className={`${styles.TableHead} ${styles.DarkBg}`}>#</th>
                            <th className={`${styles.TableHead}`}>Initial currency</th>
                            <th className={`${styles.TableHead} ${styles.DarkBg}`}>Amount of initial currency</th>
                            <th className={`${styles.TableHead}`}>Target currency</th>
                            <th className={`${styles.TableHead} ${styles.DarkBg}`}>Amount of target currency</th>
                            <th className={`${styles.TableHead}`}>Date of conversion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.conversionsList.map((item, index) => (
                            <TableRow  
                            key={index} 
                            index={index} 
                            item={item}></TableRow>
                        ))}
                    </tbody>
                </table>
                <Button 
                danger={true}
                handleClick={props.clearConversionHistory} 
                description={'Clear History'} />
            </>
            :
            <h2 className={styles.DefaultText}>You haven't done any conversions yet.</h2>
        }
        </>
    )
}
