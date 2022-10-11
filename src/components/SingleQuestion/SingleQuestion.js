import React, { useState } from 'react';
import Options from '../Options/Options';
import {EyeIcon} from '@heroicons/react/24/solid'

const SingleQuestion = ({singleQuestion}) => {
    console.log('single',singleQuestion);

    const{question,options,correctAnswer}=singleQuestion;

    const handleCorrectAnswer=()=>{
         
    }
    
    const questionSplit=question.split('<p>').join('').split('</p>').join('');
    return (
        <div className='bg-slate-200 shadow shadow-slate-500/50 w-9/12 mx-auto my-10 rounded-md p-10'>
            <div className='flex justify-between text-green-600'>
            <h3 className='text-2xl font-semibold mb-5 text-orange-600'>{questionSplit}</h3>
            <EyeIcon className='w-6 h-6' onClick={handleCorrectAnswer}></EyeIcon>
            </div>

            <div className='grid grid-cols-2'>
           {
            options.map(option=>
            <Options option={option} correctAnswer={correctAnswer}></Options>
            )
            }
            </div>
           
        </div>
    );
};

export default SingleQuestion;