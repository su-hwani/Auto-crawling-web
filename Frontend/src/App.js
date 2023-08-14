import './App.css';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Join/>,
  },
  {
    path: '/Login',
    element: <Login/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
