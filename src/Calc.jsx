import React from 'react'
import { useState, useEffect } from 'react'


function Calc() {
    const [counter, setCounter] = useState(0)

    const minus = () => {
        setCounter(prevCount => prevCount - 1)
    }

    const plus = () => {
        setCounter(prevCount => prevCount + 1)
    }

    useEffect(()=> {
        setCounter(10)
    }, [])


    return (
        <div>
            <button onClick={minus}>-</button>
            <h1>{counter}</h1>
            <button onClick={plus}>+</button>
        </div>
    )
}

export default Calc
