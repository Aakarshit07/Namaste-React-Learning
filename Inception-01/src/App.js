import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import ResraurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (   
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
};

//Setp1: Import createBrowserRouter from react-router-dom
//Step2: Make a appRoute  using createBrowserRouter and pass the array/list 
//Step2.1: Array takes an object.
//Step2.2: Object takes path and element and we can also pass the errorElement aw well.

let appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      }, 
      {
        path: "/about",
        element: <About />
      }, 
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/restaurants/:resId",
        element:<ResraurantMenu />
      }
    ],
    errorElement: <ErrorPage />
  }, 
])

//Step3: now Provide the appRouter to the root.
// this way we can tell out app that we have router to work with 

//Step4: Import the RouterProvider from react-router-dom
//Step5: Now we pass this RouterProvider to our root.
//Setp6: Now we pass this the routes we created as appRoutes pass this to "router" property.(router={appRoutes}) inRouterProvider  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);