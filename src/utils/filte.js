export const filterfunction = (searchText, restaurants) => {
    const filterdata = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterdata;
  };

  // New function to filter restaurants by rating
export const filterByRating = (minRating, restaurants) => {
    const filterdata = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= minRating
    );
    return filterdata;
  };