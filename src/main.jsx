import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './LayOuts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Components/Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true,
        loader:()=> fetch('http://localhost:3000/coffees'),
        Component:Home
      },
      {
        path:'addCoffee',
        Component:AddCoffee
      },
      {
      path:'updateCoffee/:id',
      Component:UpdateCoffee,
      loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path:'coffee/:id',
        Component:CoffeeDetails,
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
       path:'signin',
      element:<SignIn></SignIn>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'users',
        loader:()=>fetch('http://localhost:3000/users'),
        Component:Users
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
