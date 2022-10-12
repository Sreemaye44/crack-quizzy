import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Link/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
      {path:'/home',
      loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>
      },
      {path:'/',
      loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>
      },
    
     {
      path: 'home/quiz/:quizId',
      loader:async({params})=>{
        
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<QuizQuestion></QuizQuestion>
     },
     {
      path: '/quiz/:quizId',
      loader:async({params})=>{
        
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<QuizQuestion></QuizQuestion>
     },
      {path:'/statistic',
      loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Statistics></Statistics>
      },
      {path:'/blog',
      element:<Blog></Blog>
      }
      
      
    ],
    
  },
  {path:'/*',
      element:<div><h2>Not found</h2></div>
      }
  

  ]);
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>

      
    </div>
  );
}

export default App;
