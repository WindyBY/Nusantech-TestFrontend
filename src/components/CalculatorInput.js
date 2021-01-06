import React from 'react'
import '../components/css/Calculator.css'

export const CalculatorInput = props => {
    return (
        <div>
            <input
                className='input'
                placeholder='Masukan angka'
                name={props.name} 
                type="text"
                value={props.value}
                onChange={props.onChangeCounter}>
            </input>
        </div>
    )
} 