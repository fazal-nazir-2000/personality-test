import React from "react";
import {useNavigate} from 'react-router-dom'
import { reset } from "../../redux/reducers/score";
import {useSelector, useDispatch} from "react-redux";
import { resetCurrentQuestion } from "../../redux/reducers/currentQuestion"
import { setUsername } from "../../redux/reducers/username";

const Result = () => {
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.score);
  const { username } = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const personalitystatus = (points) =>
  {
    return points>0 ? `${username} you are an Introvert` : `${username} you are an Extrovert`;
  }
  const resetTest=()=>
  {
    dispatch(resetCurrentQuestion());
    dispatch(reset());
    dispatch(setUsername(''));
    navigate('/');
  }
  return (
    <div className='card'>
      <div className='score-section'>
        {personalitystatus(score)}
        <button className="button_style" type="submit" onClick={resetTest}>Check Again!!</button>
      </div>
    </div>
  );
}
export default Result;
