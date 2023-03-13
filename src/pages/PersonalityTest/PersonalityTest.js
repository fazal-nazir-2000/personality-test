import React from 'react'
import Questions from '../../components/Questions/Questions';
import '../../assets/personalitytest.css';
import Answers from '../../components/Answers/Answers';
import BackButton from '../../components/BackButton/BackButton';

const PersonalityTest = () => {
  return (
    <div className='card'>
      <Questions />
      <Answers />
      <BackButton />
    </div>
  );
}

export default PersonalityTest;
