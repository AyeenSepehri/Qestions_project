import React , {useState} from 'react'
import Card from '../layout/Card'
import InputQuestion from './INPUT/InputQuestion';


//datas of questions section 
const questionDatas = [
  {
    id: Math.random(),
    type: "INPUT",
    questionContent: "لطفا ایمیل خود را وارد کنید:",
  } ,
  {
    id: Math.random(),
    type: "INPUT",
    questionContent: "لطفا شماره تماس خود را وارد کنید:",
  },
  {
    id: Math.random(),
    type: "DROP_DOWN",
    questionContent:"لطفا تاریخ تولد خود را وارد کنید",
  },
  {
    id: Math.random(),
    type: "RADIO",
    questionContent: "لطفا جنسیت خود را تعیین کنید",
    answers: ["مرد"  , "زن" , "سایر"],
  }
]


function Question() {
  //state of question content
  const [content , setContent] = useState()
  //state of enabel and disabel next button
  const [status , setStatus] = useState(true)
  
  //initial counter
  let i = 0;
  //onClick next button
  const nextQuestionHandler = (event) => {
    event.preventDefault()
    console.log(questionDatas)
    const obj = questionDatas[i]
    console.log(i)
    console.log(obj)
    const text = obj.questionContent
    console.log(text)

    //buuuuuuuuug
    setContent(text)


    i++
    if(i > questionDatas.length - 1){
      i = 0
    }
    
  }
console.log(i)
  // let item = questionDatas[i]
  // //onClick preview button
  // const prevBtnHandler = () => {

  //   i --;
  //   if(i < 0 ){
  //     i = 0
  //   }
  //   setContent(item.questionContent);
  //   console.log(item.questionContent)
  //   console.log(i)
  // }

  // const changeInputHandler = (content) => {
  //   setStatus(content)
  // }

  // console.log(item.type)
  return (
    <Card>
      {/* {item.type === "INPUT" ? <InputQuestion description={content} label={"Email"} type={"email"} onChangeInput={changeInputHandler}/> : console.log("hello ayeen")} */}
      {/* <label>{content}</label> */}
      {/* <input onChange={changeInputHandler}/> */}
      <p>{content}</p>
      <button onClick={nextQuestionHandler}>next</button>
      {/* <button onClick={prevBtnHandler}>preview</button> */}


      {/* {status && <button onClick={prevBtnHandler} disabled>preview</button>}
      {!status && <button onClick={prevBtnHandler}>preview</button>} */}
    </Card>
  )
}

export default Question