import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import { setHoverEffect } from "../../redux/reducers/hoverEffect";
import { setQuestionBank } from "../../redux/reducers/questionBank";
import QuestionsService from '../../service/QuestionService';
import { warningToast, errorToast } from '../../constants';

const StartButton = () => {
  const { username } = useSelector((state) => state.username);
  const navigate = useNavigate();
  const { hoverEffect } = useSelector((state) => state.hoverEffect);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const {data, hasError} = await QuestionsService.fetchQuestions();
    hasError? errorToast() : setData(data)
  }

  const setData = (data) => {
    dispatch(setQuestionBank(data));
    navigate('/test');
  }

  const validateName = () => {
    (username === "")? warningToast() : fetchData()
  }

  return (
    <>
      <button
        className="button_style"
        onClick={ validateName }
        onMouseEnter={() => dispatch(setHoverEffect()) }
        onMouseLeave={() => dispatch(setHoverEffect()) }>
          {hoverEffect?(
            <div>Get started!</div>
          ):(
            <div>Start test</div>
          )}
      </button>
    </>
  )
}

export default StartButton
