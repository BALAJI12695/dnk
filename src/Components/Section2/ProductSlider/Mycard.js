import React from 'react'
import './Mycard.css'

const Mycard = (props) => {
    return (
        <div className='mycard'>
            <img
                src={props.imageUrl} 
                alt={`Card No. ${props.cardno}`} 
                style={{ width: '100%', height: '50%', objectFit: 'contain' }}
            />
        </div>
    );
};

export default Mycard

