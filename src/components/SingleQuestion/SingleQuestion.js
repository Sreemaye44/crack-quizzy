import React, { useState } from 'react';
import Options from '../Options/Options';
import {EyeIcon} from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = ({singleQuestion,index}) => {

    const{question,options,correctAnswer}=singleQuestion;

    const handleCorrectAnswer=()=>{
        toast.success(correctAnswer, {
            position: toast.POSITION.TOP_CENTER
    });
}
    
    const questionSplit=question.split('<p>').join('').split('</p>').join('');
    return (
        <div className='bg-slate-200 shadow shadow-slate-500/50 w-10/12 mx-auto my-10 rounded-md p-6'>
            <div className='md:flex justify-between text-green-600'>
            <h3 className='text-2xl font-semibold mb-5 text-orange-600'>{index+1}. {questionSplit}</h3>
            <EyeIcon className='w-6 h-6' onClick={handleCorrectAnswer}></EyeIcon>
            </div>

            <div className='md:grid grid-cols-2'>
           {
            options.map((option,index)=>
            <Options key={index} option={option} correctAnswer={correctAnswer}></Options>
            )
            }
            </div>
        </div>
    );
};

export default SingleQuestion;