import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizzes= useLoaderData().data;
    return (
        <div className='container  md:w-9/12 mx-auto my-20'>
            <ResponsiveContainer width='80%' height={300}>
            <LineChart  data={quizzes}>
            <Line type="monotone" dataKey="total" stroke="green" />
          <XAxis dataKey="name" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip></Tooltip>
          <YAxis />

            </LineChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default Statistics;