import React, { lazy, Suspense } from "react"; // named import
import ReactDOM from "react-dom/client";
import Headercomponents from "./components/Headres";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Aboutprofile from "./components/Aboutprofile";
import Shimmerui from "./components/Shimmerui.js"
// import InstaMart from "./components/InstaMart";

//------------------------//-------------------------//
const InstaMart = lazy(() => import("./components/InstaMart"));
//On demand loading

//-----------------------//--------------------------//

const AppLayout = () => {
  return (
    <>
      <Headercomponents />
      {/* all the childerns move to the outlet  */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Aboutprofile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:id",
        element: <ResMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/instaMart",
        element: (
          <Suspense fallback={<Shimmerui/>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // this is the props

/*
-- this all are for parcel
* HMR - hot module replacement   --    it's giving the feature that it's update the application without full relode
* create a server
* file watcher alogrithm - c++
* Bundler - parcel
* MINIFY
* CODE SPLITTING
* Cleaning our code
* Dev abd Production Build
* Super fast build algorithm
* Image Optimization
* Caching while development
* Compression
* Compatble with older version of browser
* HTTPS on dev
* port Number
* Consistent hashing Algorithm
* Zero config
* tree shaking


//-----------------transpiler part --------------------


*BABBLE(node package) - babel is a transpiler that converts ES6 to ES5- it's use browserslit

// babble - this will understand the javascript code


// babble = react.createelement => Object => HTML(DOM)

// config driven ui  -  allow you to create dynamic and customizable UIs that can be easily modified without requiring changes to underlying code
      // Diff algo

// react follows onewaydata binding -- Unidirectional Data Flow: Data flows in one direction, making the application more predictable.






//-------------------micro services--------------------(rember the search bar filter)

 *so the micro serveices are like we breaking the code into different diffrent part  try to build that program 
-  like  ui different and frontend, backend 
- monomill



///               --- virtual-dom ----------            ///

// reconsalition - it is the process of updating the virutal dom diff,updating,key prop

// react-fiber --> new reconsalition




// ------------------Moduleraity-----------------------
// dividing code into different folder



//------------------TO Handle so many compnents we use differnt bunddler---------------
    chunking
    codesplitting
    dynamic bundlinf
    lazy loading
    on Demanding Loading
    dynamic import
*/
