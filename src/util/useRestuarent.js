import { useEffect, useState } from "react";
import { menu_url } from "./constants";

const useRestaurantMenu = (resid) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(menu_url+resid);
        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    if (resid) {
      fetchData();
    }
  }, [resid]);

  return resinfo;
};

export default useRestaurantMenu;
