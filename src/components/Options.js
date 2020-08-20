import React from 'react'

export default function Options(props) {

    return (
        <select name={props.name} onChange={props.onChange}>
            {Object.keys(props.options).map((option) => {
                return (
                    <option key={option} value={option}>{props.options[option].currencyName}</option>
                )
            })}
        </select>
    )
}
