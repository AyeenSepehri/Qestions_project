import React , { useState } from 'react'

function InputQuestion(props) {
  const [disabled , setDisabled] = useState(true)

  const changeInputHandler = (e) => {
    const content = e.target.value;
  
    if(content){
      setDisabled(false)
    }

    props.onChangeInput(disabled)
  }


  return (
    <div>
        <h2>{props.description}</h2>
        <label>{props.label}</label>
        <input type={props.type} onChange={changeInputHandler}/>
    </div>
  )
}

export default InputQuestion