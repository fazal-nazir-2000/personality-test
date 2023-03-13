import React from 'react'
import { decrementCurrentQuestion } from "../../redux/reducers/currentQuestion"
import { getRecentAddedScore } from "../../redux/reducers/recentAddedScore"
import { decrementByAmount } from "../../redux/reducers/score";
import {useSelector, useDispatch} from "react-redux";

const BackButton = () => {

  const dispatch = useDispatch();
  const { recentAddedScore } = useSelector((state) => state.recentAddedScore);
  const { currentQuestion } = useSelector((state) => state.currentQuestion);

  const handlebackbutton=()=>
  {
    const recentScore = recentAddedScore.slice(-1)[0];
    dispatch(decrementByAmount(recentScore));
    dispatch(decrementCurrentQuestion());
    dispatch(getRecentAddedScore())
  }
  return (

    <div className='question-text'>
      { currentQuestion > 0 && <button className="button_style" onClick={()=>handlebackbutton()}>Back</button>}
    </div>
  )
}

export default BackButton;
