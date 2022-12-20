import React from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

function InputQuestion() {
  let questionContent = useSelector((state) => state.inputType.questionContent)

  const theme = createTheme({
    direction: 'rtl',
  });

  return (
    <div>
        <h2>{questionContent}</h2>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  )
}

export default InputQuestion