import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventList from './Components/EventList'
import './App.css';
import EventCreate from './Components/EventCreate';
import Error from './Components/Error';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<EventList/>,
      errorElement:<Error/>
    },{
      path:'/create',
      element:<EventCreate/>,
      errorElement:<Error/>
    }
  ])


  return <RouterProvider router={router}/>
}

export default App;
