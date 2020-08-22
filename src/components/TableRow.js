import React from 'react';

export default function TableRow(props) {
    const { index, item } = props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.initialCurrencyName}</td>
            <td>{item.initialCurrencyAmount}</td>
            <td>{item.targetCurrencyName}</td>
            <td>{item.targetCurrencyValue}</td>
            <td>{item.conversionDate}</td>
        </tr>
    )
}
