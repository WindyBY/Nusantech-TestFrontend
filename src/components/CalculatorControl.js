import React from "react"
import '../components/css/Calculator.css'

export const CalculatorControl = props =>{
    return(
        <div className='button'>
            <div >
                <button className='btn-block btn-lg btn-primary' onClick={props.clicked}>
                    {props.label}
                </button>
            </div>
        </div>
    )
} 