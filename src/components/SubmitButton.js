import React from 'react'

export default function SubmitButton(props) {
    return (
        <button type="submit" disabled={props.submitting}>
            Konwertuj
        </button>
    )
}
