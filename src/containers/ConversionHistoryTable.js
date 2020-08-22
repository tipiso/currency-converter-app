import React from 'react'
import TableRow from '../components/TableRow';

export default function ConversionHistoryTable(props) {

    return (
        <>
        { 
            (Array.isArray(props.conversionsList) && props.conversionsList.length > 0)   ?
            <>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="6">Conversions History</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Initial currency</th>
                            <th>Amount of initial currency</th>
                            <th>Target currency</th>
                            <th>Amount of target currency</th>
                            <th>Date of conversion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.conversionsList.map((item, index) => (
                            <TableRow key={index} index={index} item={item}></TableRow>
                        ))}
                    </tbody>
                </table>
                <button onClick={props.clearConversionHistory}>Clear History</button>
            </>
            :
            <h2>You haven't done any conversions yet.</h2>
        }
        </>
    )
}
