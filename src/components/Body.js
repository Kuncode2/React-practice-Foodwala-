import React, { useEffect, useState } from "react";
import { restrauntlist } from "../config"; //  this is called named import
import Restrauntcard from "./Restrauntcard";

const Body = () => {
  /// -------------------- useState hook ------------------------

  // useing local variable we use state init
  // what are hook  = hook are normal function used for local variable
  const [searchText, setSearchText] = useState(""); // to create state variable
  const [restaurants, setRestaurants] = useState([]);
  // variable name // function to update the virable
  // the array methos in the useState is the desturctureing

  // the usestate follow two way binding when?
  // when we read and write same time

  // why do we need?
  //  becuase react can't track each and every variable and and while we changing any variable react don't know what to render for that reson react says use the state
  // and interreact with react

  // Handle input change event

  /// --------------- useEffect---------------- ///
  // react render our components and the useeffect is called
  // empty dependencies array => once after render
  // dependencies array [searchText] => once after  + everytime my search texxt change
  // first render then useeffect

  useEffect(() => {  // callback function
    getRestaurents();
  }, []); // dependencies array -The dependency array in the useEffect hook in React controls when the effect should run- ( The dependency array in the useEffect hook in React controls when the effect should run )
  
  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jdata = await data.json();
    console.log(jdata);
    setRestaurants(
      jdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // optional chaning
  }


  // ------ search-bar--------//
  const onInputChange = (e) => {
    setSearchText(e.target.value);
  };



  // Filter function to filter restaurants based on search text
  const filterfunction = (searchText, restaurants) => {
    const filterdata = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterdata;
  };


  return (
    <>
      <div className="search-container">
        <input
          onChange={onInputChange}
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
        />

        <button
          className="search-btn"
          // Anonymous function used to delay execution until button is clicked
          onClick={() => {
            const data = filterfunction(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="card-list">
        {restaurants.map((restaurant) => (
          <Restrauntcard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
