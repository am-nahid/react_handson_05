import React from 'react'
import HigherOrder from './HigherOrder'
import '../App.css'

const OnClick = (props) => {
  return (
    <div className='onClick'>
        <h2>HOC On click</h2>
      <h1>{props.value}</h1>
      <button onClick={props.submit}>Click here</button>
    </div>
  )
}

export default HigherOrder(OnClick)
