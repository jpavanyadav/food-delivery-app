import React, { useContext,useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import '../index.css';
import Header from "./components/header";
import Body from "./components/bady";
import About from "./components/about";
import Contact from "./components/contact";
//import Menu from "./components/menu";
import Menu from "./util/useRestaurantMenu1";
import store from "./util/store"; 
import UserContext from "./util/userContext";
import Cart from "./components/cart";


 const Applayout=()=>{
  const [userName, setUserName] = useState();
    return(
        
 <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <div className="bg-green-500 text-white p-4 text-xl">
  Tailwind is working!</div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    );
 }

 const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path: "/restaurants/:resid",
        element: <Menu/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    }
        ]
    },
 ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>)