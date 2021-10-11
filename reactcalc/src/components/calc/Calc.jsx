import React, { useState } from "react"
import './Calc.css'

const Calc = () => {

    const [operator, setOperator] = useState('+')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(num1 + num2)

    function calculator(){
        if(operator === '+') setTotal(num1 + num2)
        if(operator === '-') setTotal(num1 - num2)
        if(operator === '*') setTotal(num1 * num2)
        if(operator === '/') setTotal(num1 / num2)
    }

    return (
        <div className="calc">
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="text" value={operator} onChange={(e) => setOperator(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={calculator}>calcular</button>
            <p>{total}</p>
        </div>
    )
}

export default Calc