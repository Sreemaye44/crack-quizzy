import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Options = ({option,correctAnswer}) => {
  const [count, setCount]=useState(0);
    const handleAnswer=(option)=>{
          
           if(correctAnswer===option)
           {
             setCount(count+1);
            toast.info("Congrats! Your answer is right", { theme: "light" });
           }
           else
           {
            setCount(count-1);
             toast("Sorry!Wrong Answer! Try Again");
             
           }
           console.log( setCount);
    }

    return (
        <div className='container bg-green-300 py-5 shadow shadow-green-700/40 m-3 md:w-9/12 mx-auto rounded-md'>
            <input type="radio" id="option" name="fav_answer" onChange={ () => handleAnswer(option)} value="option"/>
            <label className='px-2 text-lg' for="option">{option}</label>  
            <ToastContainer />
        </div>
    );
};

export default Options;