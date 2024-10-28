import  { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const procesoPesado = (iteraciones = 100) => {
    for(let i = 0;i<iteraciones;i++){
        console.log('Ahí vamos...');
    }
    return `${iteraciones} iteraciones realizadas`;
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true)
    const valorMemorizado = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr/>
        <h4>{valorMemorizado}</h4>
        <button
            className='btn btn-primary'
            onClick={() => increment()}
        >
            +1
        </button>
        <button
        className='btn btn-outline-primary'
        onClick={() => setShow(!show)}>
            Show/hide {JSON.stringify(show)}
        </button>
    </>
  )
}
