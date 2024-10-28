import { useCounter } from "../hooks/useCounter"


export const CounterWithCustimHook = () => {

    const { counter, increment,decrement,reset } = useCounter(0);

  return (
    <>
        <h1>Counter with hook: {counter} </h1>
        <hr/>

        <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
    </>
  )
}
