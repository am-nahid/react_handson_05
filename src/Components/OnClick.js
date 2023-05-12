import React from 'react'
import HigherOrder from './Hoc'

const OnClick = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.submit}>Click here</button>
    </div>
  )
}

export default HigherOrder(OnClick)
