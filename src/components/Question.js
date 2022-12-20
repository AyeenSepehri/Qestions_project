import React from 'react'
import Card from '../layout/Card'
import InputQuestion from './INPUT/InputQuestion';
import { useSelector , useDispatch } from 'react-redux';
import { questionInput } from '../store/store';
import RadioQuestion from './Radio/RadioQuestion';
import DropDownQuestion from './Drop_Down/DropDownQuestion';


function Question() {
  //
  let questionType = useSelector((state) => state.inputType.questionType)
  const dispatch = useDispatch()

  //onClick next button
  const nextQuestionHandler = () => {
    dispatch(questionInput.question())
    dispatch(questionInput.type())
    dispatch(questionInput.counter())
    console.log(questionType)
  }
  return (
    <Card>
      {questionType === "INPUT" && <InputQuestion/>}
      {questionType === "RADIO" && <RadioQuestion/>}
      {questionType === "DROP_DOWN" && <DropDownQuestion/> }
      <button onClick={nextQuestionHandler}>next</button>
    </Card>
  )
}

export default Question