import React, {useState} from 'react'

const HigherOrder = (MainFunctionalComponent) => {
    function Hoc(){
        const [count,setCount]=useState(0);
        const handleClick=()=>{
            setCount(count+1)
        }
  return (
    
      <>
        <MainFunctionalComponent value={count} submit={handleClick}/>
      </>
  
  )
    }
  return Hoc
}

export default HigherOrder
