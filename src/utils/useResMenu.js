import { useEffect, useState } from "react";
import {FETCH_MENU_URL} from "../config";

const useResMenu = (id) => {
  const [menudata, setMenudata] = useState(null);

  // data from api
  useEffect(() => {
    getResdata();
  }, []);

  async function getResdata() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setMenudata(json?.data?.cards[2]?.card?.card?.info);
  }

  return menudata;
};

export default useResMenu;
