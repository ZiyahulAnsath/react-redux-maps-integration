import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventList from './Components/EventList'
import './App.css';
import EventCreate from './Components/EventCreate';
import Error from './Components/Error';
import EventView from './Components/EventView';

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
    },{
      path:'/view/:id',
      element:<EventView/>,
      errorElement:<Error/>
    }
  ])


  return <RouterProvider router={router}/>
}

export default App;
