import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

export const QuizMarksContext=createContext(0);
export const DeductMarksContext=createContext(0)

const QuizQuestion = () => {
  const [marks,setMarks]=useState(0);
  const [wrong,setWrong]=useState(0)
  
  
  const QuizQuestion = useLoaderData().data.questions;
  

  return (
    
    <div>
    <QuizMarksContext.Provider value={[marks,setMarks]}>
    <DeductMarksContext.Provider value={[wrong,setWrong]}>
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
      <h3 className='none bg-orange-200 sticky top-0 text-xl p-5 mx-5 mt-9 rounded-md text-green-700 font-bold drop-shadow-md'> Right: {marks} <span className="text-red-500">Wrong: {wrong}</span></h3>
     
      </div>
      </div>
      
      <ToastContainer />
      </DeductMarksContext.Provider>
    </QuizMarksContext.Provider>
      
    </div>
  );
};

export default QuizQuestion;
