import React from 'react';
import Options from '../Options/Options';

const SingleQuestion = ({singleQuestion}) => {
    console.log(singleQuestion);
    const{question,options}=singleQuestion;
    const questionSplit=question.split('<p>').join('').split('</p>').join('');
    //const{question}=SingleQuestion;
    return (
        <div>
            <h3>{questionSplit}</h3>
           {
            options.map(option=>
            <Options option={option}></Options>
            )
            }
           
        </div>
    );
};

export default SingleQuestion;