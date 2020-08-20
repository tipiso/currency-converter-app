import React from 'react'

export default function List(props) {
    let list;
    console.log(props.conversionsList)
    if(Array.isArray(props.conversionsList) && props.conversionsList.length > 0){
        list = 
            <ul>
                {props.conversionsList.map((item, index) => (
                    <span key={index}>{item.amount}</span>
                ))}
            </ul>
    }else{
        list = <h2>You haven't done any conversions yet.</h2>
    }

    return (
        <div>
            {list}
        </div>
    )
}
