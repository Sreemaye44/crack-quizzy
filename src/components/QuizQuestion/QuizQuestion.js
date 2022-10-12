import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

export const QuizMarksContext=createContext(0);

const QuizQuestion = () => {
  const [marks,setMarks]=useState(0);
  
  
  const QuizQuestion = useLoaderData().data.questions;
  

  return (
    
    <div>
    <QuizMarksContext.Provider value={[marks,setMarks]}>
    <h3 className="text-3xl pt-5 text-green-600 font-bold drop-shadow-md">
        Total Questions: {QuizQuestion.length}
       
      </h3>
      <div className="md:flex">
      <div className="grow">
      {QuizQuestion.map((singleQuestion, index) => (
        <SingleQuestion
          key={singleQuestion.id}
          index={index}
          singleQuestion={singleQuestion}
        ></SingleQuestion>
      ))}</div>
      <div>
      <h3 className='none bg-orange-200 sticky top-1 text-3xl p-5  mx-5 mt-9 rounded-md text-green-600 font-bold drop-shadow-md'> Marks: {marks}</h3>
      </div>
      </div>
      
      <ToastContainer />
    </QuizMarksContext.Provider>
      
    </div>
  );
};

export default QuizQuestion;
