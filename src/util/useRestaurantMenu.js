import { useEffect, useState } from "react";
import {  menu_url } from "./constants";

const useRestaurantMenu = (resid) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() =>{
      const fetchData = async () => {
  try {
    const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3916153&lng=78.5708901&restaurantId=628735&catalog_qa=undefined&submitAction=ENTER");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();

    if (!text || text.trim() === "") {
      throw new Error("Empty response body");
    }

    const json = JSON.parse(text);
    setResInfo(json);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};
    if (resid) {
    fetchData();
  }}, [resid]);




  return resinfo;
};

export default useRestaurantMenu;