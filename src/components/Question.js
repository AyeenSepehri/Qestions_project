import React , {useState} from 'react'
import Card from '../layout/Card'
import InputQuestion from './INPUT/InputQuestion';

const qustionDatas = [
  {
    id: Math.random(),
    type: "email",
    questionContent: "لطفا ایمیل خود را وارد کنید:",
    corectAnswer: 19
  } ,
  {
    id: Math.random(),
    type: "number",
    questionContent: "لطفا شماره تماس خود را وارد کنید:",
    corectAnswer: 19
  },
  {
    id: Math.random(),
    type: "number",
    questionContent:"whats your phone number",
    corectAnswer: 19
  }
]


function Question() {
  const [content , setContent] = useState(qustionDatas[0].questionContent)
  
  let i = 0;
  const nextQuestionHandler = () => {
    i ++;
    let item = qustionDatas[i]
    if(i === 0){
      console.log("mamad")
    }
    setContent(item.questionContent);
    console.log(item.questionContent)
    console.log(i)
  }
  return (
    <Card>
      <InputQuestion description={content} label={"Email"} type={"email"}/>
      <button onClick={nextQuestionHandler}>next</button>
    </Card>
  )
}

export default Question