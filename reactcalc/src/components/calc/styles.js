import styled from "styled-components";

export const Card = styled.div`
    width: 70%;
    background: #fafafa;
    height: auto;
    padding: 15px;
    margin: 30px  auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 #c9c9c9;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Input = styled.input`
    border: 1px solid rgb(163, 163, 163);
    padding: 10px 8px;
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 32px;
    text-align: center;
`
export const Select = styled.select`
    border: 1px solid rgb(163, 163, 163);
    padding: 10px 8px;
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 32px;
    text-align: center;
`

export const Button = styled.button`
    border: 1px solid rgb(163, 163, 163);
    padding: 10px 8px;
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 32px;
    text-align: center;

    padding: 10px 15px;
    background: rgb(8, 168, 107);
    color: #fff;
    transition: .1s ease-in-out;

    :hover {
        background: #fff;
        color: rgb(8, 168, 107);
        border: 1px solid rgb(8, 168, 107);
        transition: .2s ease-in-out;
    }
`

export const Result = styled.p`
    margin-top: 15px;
    font-size: 36px;
    font-weight: bold;
`