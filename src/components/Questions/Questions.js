import React from 'react'
import {useSelector} from "react-redux";

const Questions = () => {
  const { questionBank } = useSelector((state) => state.questionBank);
  const { currentQuestion } = useSelector((state) => state.currentQuestion);
  return (
    <>
      <div className='question-count'>
        <span>{currentQuestion+1}</span>/{questionBank.length}
      </div>
      <div className='question-text'>
        {questionBank[currentQuestion]?.question}
      </div>
    </>
  )
}

export default Questions
