import React, { useState } from 'react';
import { toast } from 'react-toastify';

  

const Options = ({option,correctAnswer}) => {
    const handleAnswer=(selectedOption)=>{
           if(correctAnswer===selectedOption){
            toast.success("Congrats! Your answer is right");
           }else{
             toast.error("Sorry!Wrong Answer! Try Again");
           }
           
    }

    return (
        <div className='container bg-green-300 py-5 shadow shadow-green-700/40 m-3 md:w-9/12 mx-auto rounded-md'>
            <input type="radio" id="option" name="fav_answer" onChange={ () => handleAnswer(option)} value={option}/>
            <label className='px-2 text-lg'>{option}</label>
        </div>
    );
};

export default Options;