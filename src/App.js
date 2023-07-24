import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router';

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  ); // routes is the actal
}

export default App;
