import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Link/Main';

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
      {path:'/',
      element:<Header></Header>
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
