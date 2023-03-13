import React from 'react'
import {useNavigate} from 'react-router-dom'
import { incrementByAmount } from "../../redux/reducers/score";
import { incrementCurrentQuestion } from "../../redux/reducers/currentQuestion"
import {useSelector, useDispatch} from "react-redux";
import { setRecentAddedScore } from "../../redux/reducers/recentAddedScore";

const Answers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questionBank } = useSelector((state) => state.questionBank);
  const { currentQuestion } = useSelector((state) => state.currentQuestion);

  const handleAnswerResponse=(points)=>
  {
    dispatch(incrementByAmount(points));
    const nextQuestion= currentQuestion+1;
    if(nextQuestion<questionBank.length)
    {
      dispatch(setRecentAddedScore(points));
      dispatch(incrementCurrentQuestion());
    }
    else{
      navigate("/result");
    }
  }
  return (
    <div className='answer-text'>
      {questionBank[currentQuestion]?.answers.map((answer,index)=>
      (
        <button className="button_style" key={index} onClick={()=>handleAnswerResponse(answer.points)}>{answer.content}</button>
      ))}
    </div>
  )
}

export default Answers
