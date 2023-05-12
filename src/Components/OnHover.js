import React from 'react'
import HigherOrder from './HigherOrder'
import '../App.css'

const OnHover = (props) => {
  return (
    <div className='onHover'>
        <h2>HOC On hover</h2>
      <h1>{props.value}</h1>
      <button onMouseOver={props.submit}>Click here</button>
    </div>
  )
}

export default HigherOrder(OnHover)
