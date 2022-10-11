import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizzes= useLoaderData().data;
    return (
        <div>
           <Header></Header>
           <div className='w-10/12 mx-auto my-5 md:flex gap-4'>
            
            {
                quizzes.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }

           </div>

      
        </div>
    );
};

export default Home;