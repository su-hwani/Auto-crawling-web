import './App.css';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import Main from './components/Mainpage/Mainpage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Join/>,
  },
  {
    path: '/Login',
    element: <Login/>,
  },
  {
    path: '/main',
    element: <Main/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
