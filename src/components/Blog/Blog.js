import React from 'react';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto py-5 grid grid-cols-3'>
            <div className='bg-slate-300 p-5 mr-5 rounded-md'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>What is the purpose of React Router?</h2>
            <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
            </p>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            
            </p>
            </div>
           <div className='bg-slate-300 p-5 mr-5 rounded-md'>
           <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'> How does context api work?</h2>
            <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           </div>
            <div className='bg-slate-300 p-5 mr-5 rounded-md'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>What is useRef Hook?</h2>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. UseRef is used if one need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blog;