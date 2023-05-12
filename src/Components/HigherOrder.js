import React, {useState} from 'react'

const HigherOrder = (MainFunctionalComponent) => {
    function Hoc(){
        const [count,setCount]=useState(0);
        const handleClick=()=>{
            setCount(count+1)
        }
  return (
    
      <div>
        <MainFunctionalComponent value={count} submit={handleClick}/>
      </div>
  
  )
    }
  return Hoc
}

export default HigherOrder
