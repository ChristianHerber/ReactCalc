import React, { useState } from "react"
import { Card, Input, Select, Button, Result } from './styles'

const Calc = () => {

    const [operator, setOperator] = useState('+')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(num1 + num2)

    function calculator(){
        if(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') alert("Não é uma operação válida!")
        if(operator === '+') setTotal(num1 + num2)
        if(operator === '-') setTotal(num1 - num2)
        if(operator === '*') setTotal(num1 * num2)
        if(operator === '/') setTotal(num1 / num2)
    }

    return (
        <Card>
            <Input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <Select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </Select>
            <Input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <Button onClick={calculator}>Calculate</Button>
            <Result className="result">{ `= ${total}`}</Result>
        </Card>
    )
}

export default Calc