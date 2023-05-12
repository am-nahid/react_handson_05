import React, {useMemo, useState} from 'react'
import '../App.css'

const PureComponent = () => {
    const [count, setCount]=useState(0)
    const memoCount = useMemo(()=>count,[count])
    const handleSubmit=()=>{
        setCount(count+1)
    }
  return (
    <div className='PureComponent'>
        <h1> {memoCount}</h1>
        <button onClick={handleSubmit} >
           Pure Component
        </button>
      
    </div>
  )
}

export default PureComponent
