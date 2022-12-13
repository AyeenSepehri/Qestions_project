import React , {useState} from 'react'
import Card from '../layout/Card'
import InputQuestion from './INPUT/InputQuestion';


//datas of questions section 
const questionDatas = [
  {
    id: Math.random(),
    type: "INPUT",
    questionContent: "لطفا ایمیل خود را وارد کنید:",
    userAnswer: "",
  } ,
  {
    id: Math.random(),
    type: "INPUT",
    questionContent: "لطفا شماره تماس خود را وارد کنید:",
    userAnswer: "",
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
  //initial counter
  let [i , setI] = useState(0)
  //state of question content
  const [content , setContent] = useState(questionDatas[0].questionContent)


  //function for define content of question
  const contentIdentifire = (counter) => {
    console.log(counter)

    const obj = questionDatas[counter]
    console.log(obj)

    const text = obj.questionContent
    console.log(text)

    //set question
    setContent(text)
  }

  //onClick next button
  const nextQuestionHandler = () => {
    
    //call caption of question function
    contentIdentifire(i)
    
    //set counter
    setI(i++)

    //returning counter to 0
    if(i > questionDatas.length - 1){
      setI(0)
    }
    console.log(i)
    
  }
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