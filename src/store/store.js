import { configureStore , createSlice } from '@reduxjs/toolkit'


//datas of questions section 
const questionDatas = [
    {
      id: Math.random(),
      number: 1,
      type: "INPUT",
      questionContent: "لطفا ایمیل خود را وارد کنید:",
      userAnswer: "",
    } ,
    {
      id: Math.random(),
      number: 2,
      type: "INPUT",
      questionContent: "لطفا شماره تماس خود را وارد کنید:",
      userAnswer: "",
    },
    {
      id: Math.random(),
      number: 3,
      type: "DROP_DOWN",
      questionContent:"لطفا تاریخ تولد خود را وارد کنید",
      userAnswer: '' , 
    },
    {
      id: Math.random(),
      number: 4,
      type: "RADIO",
      questionContent: "لطفا جنسیت خود را تعیین کنید",
      answers: ["مرد"  , "زن" , "سایر"],
      userAnswer: "",
    }
  ]
  

  const initInputState = {
      counter: 0,
      questionContent: "" ,
      questionType: "" ,
      length: questionDatas.length ,
  }

  //input type slice
  const inputTypeSlice = createSlice({
      name: "Input",
      initialState: initInputState,
      reducers: {
          counter(state){
              // state.questionContent = questionDatas[0].questionContent;
              state.counter ++;
              if(state.counter > state.length -1){
                state.counter = 0
              }
          },
          question(state){
            let i = state.counter
            state.questionContent = questionDatas[i].questionContent;
            console.log(state.questionContent)
            console.log(state.counter)
          },
          type(state){
            state.questionType = questionDatas[state.counter].type;
            console.log(state.questionType)
            console.log(state.counter)
          },
      }
  })

export const store =  configureStore({
    reducer: {
        inputType: inputTypeSlice.reducer,
        // dropDownType: dropDownTypeSlice.reducer,
        // radioType: radioTypeSlice.reducer,
    }
})

export const questionInput = inputTypeSlice.actions;