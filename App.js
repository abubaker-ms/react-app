import React, { useContext, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import { BrowserRouter,RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import { ResturantConatiner } from "./src/components/RestuarntConatiner";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/grocery";
import { lazy,Suspense ,Provider} from "react";
import { Provider, Provider } from "react-redux";
import appStore from "./utils/cartStore";
import { Cart } from "./src/components/Cart";

const Grocery=lazy(()=>import("./src/components/grocery"))

// const {LoggedInUser}=useContext(UserContext)

const AppLayout=()=>{
     const [LoggedInUser,setloggedInUser]=useState('Umar')
     return(
        <Provider store={appStore}>
        <UserContext.Provider value={{LoggedInUser:LoggedInUser ,setloggedInUser}}>
        <div>
             <Header />
             <Outlet />
        </div>  
        </UserContext.Provider>
        </Provider>
     )

}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/aboutUs",
                element:<AboutUs />,
            },
            {
                path:"/restaurantmenu/:resid",
                element: <ResturantMenu />                      
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading..</h1>}>
                   <Grocery />
                </Suspense>   
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ]
    },
  
])
const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={appRouter } />) 