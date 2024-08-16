import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Restrauntcard from "./Restrauntcard";
import Shimmerui from "./Shimmerui";
import useOnline from "../utils/useOnline";

const Body = () => {
  /// -------------------- useState hook ------------------------

  // using local variable we use state init
  // what are hook  = hook are normal function used for local variable

  const [allproduct, setAllProduct] = useState([]);
  const [filterrestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // to create state variable
  const [minRating, setMinRating] = useState(""); // New state for rating

  // variable name // function to update the variable
  // the array method in the useState is the destructuring

  // the usestate follow two way binding when?
  // when we read and write same time

  // why do we need?
  // because react can't track each and every variable and while we changing any variable react doesn't know what to render for that reason react says use the state
  // and interact with react

  /// --------------- useEffect---------------- ///
  // react render our components and the useeffect is called
  // empty dependencies array => once after render
  // dependencies array [searchText] => once after  + every time my search text changes
  // first render then useeffect

  useEffect(() => {
    getRestaurents();
  }, []); // dependencies array - The dependency array in the useEffect hook in React controls when the effect should run
  // when there was no dependency array then the useEffect will be called after every render

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jdata = await data.json();
    setAllProduct(
      jdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // optional chaining
    setFilterRestaurants(
      jdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  // --------online and offline-------
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>offline, plz check your connection</h1>;
  }

  // ------ search-bar--------//
  const onInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // New input handler for rating
  const onRatingChange = (e) => {
    setMinRating(e.target.value);
  };

  // Filter function to filter restaurants based on search text
  const filterfunction = (searchText, restaurants) => {
    const filterdata = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterdata;
  };

  // New function to filter restaurants by rating
  const filterByRating = (minRating, restaurants) => {
    const filterdata = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= minRating
    );
    return filterdata;
  };

  // conditional Rendering
  return /*ternary operator*/ allproduct?.length === 0 ? (
    <Shimmerui />
  ) : (
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
            const data = filterfunction(searchText, allproduct);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>

        {/* New input for rating */}
        <input
          onChange={onRatingChange}
          type="number"
          className="rating-input"
          placeholder="Minimum Rating"
          value={minRating}
          min="0"
          max="5"
          step="0.1"
        />

        <button
          className="rating-btn"
          // Anonymous function used to delay execution until button is clicked
          onClick={() => {
            const data = filterByRating(minRating, allproduct);
            setFilterRestaurants(data);
          }}
        >
          Search by Rating
        </button>
      </div>

      <div className="card-list">
        {filterrestaurants?.length === 0 ? (
          <h1>Not found</h1>
        ) : (
          filterrestaurants.map((restaurant) => (
            <Link
              to={"/restraunt/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Restrauntcard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
