import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
    const quizzes= useLoaderData().data;
    return (
        <div className='container w-9/12 mx-auto my-20'>
            
            <LineChart width={600} height={300} data={quizzes}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip></Tooltip>
          <YAxis />

            </LineChart>
        </div>
    );
};

export default Statistics;