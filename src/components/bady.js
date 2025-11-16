import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./card";
import {MENU_API} from "../util/constants"
import Shimmer from "./Shimmer";
import useOnlineStatus from "../util/useOnlineStatus";

const Body = () => {
  const [listofres, setList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterTopRated = () => {
    const filtered = filter.filter((res) => res.info.avgRating >= 4.5);
    setList(filtered);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API);
      console.log(response);
      const json = await response.json();
      const restaurants =
        json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setList(restaurants);
        setFilter(restaurants);
        console.log(listofres);
      }
    } catch (error) {
      console.log("Error fetching Swiggy data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
console.log(listofres);   
  const filteredList = listofres.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) 
    {return <h1>check ur  internet connection</h1>}

  return (
    <div className="body">
      <div className="filter flex m-4 p-4">
        <input
          type="text"
           data-testid="searchInput"
            className="border border-solid border-black"
          id="username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={() => {

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}>Search</button>
      </div>

      <div className="search m-4 p-4 flex items-center">
        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={() => setList(filter)}>
          Reset List
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredList.length > 0 ? (

          filteredList.map((res) => (
            <Link  
            key={res.info.id} 
            to={"/restaurants/"+res.info.id}>
            <RestaurantCard
             cloudinaryImageId={res.info.cloudinaryImageId}
              resname={res.info.name}
              cuisines={res.info.cuisines.join(", ")}
              rating={res.info.avgRating}
              
            /></Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
