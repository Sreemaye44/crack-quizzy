import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizQuestion = () => {
    const QuizQuestion=useLoaderData().data.questions;
    console.log(QuizQuestion);
    return (
        <div>
            <h3 className='text-3xl pt-5 text-green-600 font-bold drop-shadow-md'>Total Questions: {QuizQuestion.length}</h3>
            {
                QuizQuestion.map(singleQuestion=><SingleQuestion key={singleQuestion.id} singleQuestion={singleQuestion}></SingleQuestion>)
            }
        </div>
    );
};

export default QuizQuestion;