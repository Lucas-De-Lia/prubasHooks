import { useState } from "react"
//el = 10 lo que hace es poner un valor por defecto si no me mandan el valor
export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter((current)=> current + value);
    }

    const decrement = (value = 1) => {
        if (counter===0) return;
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}