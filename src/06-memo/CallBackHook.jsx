
import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
   const increment =  useCallback(
      (value) => {
        setCounter((c) => c + value );    
      },
      [],
    )
    
    const [counter, setCounter] = useState(10)

  return (
    <>
        <h1>CallBackHook : {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment}/>


    </>
  )
}
