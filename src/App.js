import React from "react";
import ReactDOM from "react-dom/client";
import Headercomponents from "./components/Headres";
import Footer from "./components/Footer";
import Bodys from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Headercomponents />
      <Bodys />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
/*
// this all are for parcel
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
*/
// babble - this will understand the javascript code


// babble = react.createelement => Object => HTML(DOM)

// config driven ui  -  allow you to create dynamic and customizable UIs that can be easily modified without requiring changes to underlying code
      // Diff algo

// react follows onewaydata binding -- Unidirectional Data Flow: Data flows in one direction, making the application more predictable.



//-------------------micro services--------------------(rember the search bar filter)

/* so the micro serveices are like we breaking the code into different diffrent part  try to build that program 
-  like  ui different and frontend, backend 
*/


///               --- virtual-dom ----------            ///

// reconsalition - it is the process of updating the virutal dom diff,updating,key prop

// react-fiber --> new reconsalition
