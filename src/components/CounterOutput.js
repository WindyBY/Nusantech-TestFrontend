import React from 'react';

export default function CounterOutput(props) {
    return (
        <div className='row'>
            <div className='hasil'>
                <h3>Hasil :</h3>
            </div>
            <div className='output'>
                <h3>
                    {props.showCounter === "A" ? props.outputCalTmbhKrg : props.outputCalKaliBagi}
                    {props.total}
                </h3>    
            </div>
        </div>
    )
} 