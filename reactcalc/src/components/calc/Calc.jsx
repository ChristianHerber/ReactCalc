import React, { useState } from "react"

const Calc = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(num1 + num2)

    function sum(){
        setTotal(num1 + num2)
    }

    return (
        <div className="calc">
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={sum}>calcular</button>
            <p>{total}</p>
        </div>
    )
}

export default Calc