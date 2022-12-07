import React from 'react'

function InputQuestion(props) {
  return (
    <div>
        <h2>{props.description}</h2>
        <label>{props.label}</label>
        <input type={props.type}/>
    </div>
  )
}

export default InputQuestion