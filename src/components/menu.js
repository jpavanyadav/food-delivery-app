import { useState } from "react";
import { useParams } from "react-router-dom";

import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../util/useRestaurantMenu1";

const Menu = () => {
  const { resid } = useParams();
  const dummy = "Dummy Data";

  const resinfo = useRestaurantMenu(resid);
  const [showIndex, setShowIndex] = useState(false);

  if (!resinfo) return <h1>LOADING...</h1>;

  // Extract restaurant info
  const res = resinfo?.data?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  // Extract menu cards safely
  const menuCards = resinfo?.data?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Filter categories safely
  const categories = Array.isArray(menuCards)
    ? menuCards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{res?.name}</h1>
      <h2 className="font-bold text-lg">{res?.cuisines?.join(", ")}</h2>
      <h3 className="font-semibold mt-4 mb-2">MENU</h3>

      <div className="item-container">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showIndex={showIndex}
              showItems={index === showIndex}
              setShowIndex={() =>
      setShowIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    dummy={dummy}
    index={index}
            />
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
