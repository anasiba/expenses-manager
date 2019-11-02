import React from 'react'

export default function Item(props) {
    return (
        <div className='cont'>
            <div className="desc">{props.desc}</div>
            <div className="mount">{props.amount} DH</div>
            <div className="rmv">Remove</div>
        </div>
    )
}
