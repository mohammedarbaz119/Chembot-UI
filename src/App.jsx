// src/App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Chat from './components/Chat/Chat';
import ChemBotLanding from './components/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<ChemBotLanding/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
  
]);

function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
