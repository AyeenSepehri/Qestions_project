import React from 'react'
import Card from '../layout/Card'
import InputQuestion from './INPUT/InputQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { questionInput } from '../store/store';
import RadioQuestion from './Radio/RadioQuestion';
import DropDownQuestion from './Drop_Down/DropDownQuestion';


function Question() {
  //
  let questionType = useSelector((state) => state.inputType.questionType)
  let questionAnswer = useSelector((state) => state.inputType.answer)
  let questionCounter = useSelector((state) => state.inputType.counter)
  
  
  const dispatch = useDispatch()

  //onClick next button
  const nextQuestionHandler = () => {
    dispatch(questionInput.type())
    
    switch (questionType) {
      case "INPUT":
        // dispatch(questionInput.question())
        console.log("thiw is input")
        break;
      case "RADIO":
        // dispatch(questionInput.question())
        // dispatch(questionInput.debugFn())
        console.log("this is radio")
        break;
      case "DROP_DOWN":
        // dispatch(questionInput.question())
    
        console.log("this is drop down")
        break;
    }
    dispatch(questionInput.counter())
    // console.log(questionAnswer)
    // console.log(questionCounter)

  }
  return (
    <Card>
      {questionType === "INPUT" && <InputQuestion />}
      {questionType === "RADIO" && <RadioQuestion />}
      {questionType === "DROP_DOWN" && <DropDownQuestion />}
      <button onClick={nextQuestionHandler}>next</button>
    </Card>
  )
}

export default Question







// dispatch(questionInput.question())
// dispatch(questionInput.type())
// dispatch(questionInput.debugFn())
// dispatch(questionInput.counter())
// console.log(questionAnswer)
// console.log(questionCounter)