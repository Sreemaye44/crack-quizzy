import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const{name,logo,total,id}=quiz;
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full  bg-slate-700" src={logo} alt="Sunset in the mountains"/>

  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{name}</div>
    
  </div>
  <div class="px-6 pt-4 pb-2">
    <h3 class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total Questions: {total}</h3>
    <Link to={`./quiz/${id}`}><button class=" bg-slate-700 w-full rounded-full px-3 py-1 font-semibold text-white mr-2 mb-2 hover:bg-green-500">Practice Now!</button></Link>

  </div>
</div>
    );
};

export default Quiz;