import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { setUsername } from "../../redux/reducers/username";
import { ToastContainer } from 'react-toastify';
import StartButton from "../../components/StartButton/StartButton";
import '../../assets/main.css';

const Home = () => {
  const { username } = useSelector((state) => state.username);
  const dispatch = useDispatch();

  return (
    <>
      <div className='cardmain'>
        <div>
          <div className='heading-main'> Take a personality test </div>
          <div className='description-main'> You will be asked 5 questions to judge wether you are an extrovert or an introvert </div>
          <div className='input-heading'>Enter your name</div>
          <input type="text"
            value={ username }
            onChange = {(event) => {
              dispatch(setUsername(event.target.value));
            }}
            data-testid = 'input-tag'
          />
        <StartButton />
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Home
