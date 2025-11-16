import { useState } from "react";
import menuData from "./data.json";
import Itemcard from "../components/itemcard";
import RestaurantCategory from "../components/category";

const Menu = () => {
  const resinfo = menuData;
  const dummy = "Dummy Data";
  const [showIndex, setShowIndex] = useState(null);

  // ✅ Extract restaurant info safely
  const res = resinfo?.data?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  // ✅ Extract menu cards safely
  const menuCards = resinfo?.data?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // ✅ Filter categories safely
  const categories = Array.isArray(menuCards)
    ? menuCards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{res?.name || "Restaurant"}</h1>
      <h2 className="font-bold text-lg">
        {res?.cuisines?.join(", ") || "Cuisines not available"}
      </h2>
      <h3 className="font-semibold mt-4 mb-2">MENU</h3>

      <div className="item-container">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
              dummy={dummy}
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
