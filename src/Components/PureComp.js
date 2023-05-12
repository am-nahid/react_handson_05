import React, {useMemo, useState} from 'react'

const PureComponent = () => {
    const [count, setCount]=useState(0)
    const memoCount = useMemo(()=>count,[count])
    const handleSubmit=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={handleSubmit} >
            {memoCount}
        </button>
      
    </div>
  )
}

export default PureComponent
