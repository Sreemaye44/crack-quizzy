import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizQuestion = () => {
    const QuizQuestion=useLoaderData().data.questions;

    return (
        <div>
            <h3 className='text-3xl pt-5 text-green-600 font-bold drop-shadow-md'>Total Questions: {QuizQuestion.length}</h3>
            {
                QuizQuestion.map((singleQuestion,index)=><SingleQuestion key={singleQuestion.id} index={index} singleQuestion={singleQuestion}></SingleQuestion>)
            }
            <ToastContainer/>
        </div>
                
            
    );
};

export default QuizQuestion;