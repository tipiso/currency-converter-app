import React from 'react'

export default function OutputComponent(props) {

    return (
        <div>
            {props.convertedValue ? props.convertedValue : 0}
        </div>
    )
}
