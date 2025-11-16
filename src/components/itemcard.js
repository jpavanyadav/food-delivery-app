import { item_url } from "../util/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";

const Itemcard = ({ items, dummy }) => {
    const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="w-9/12 mx-auto">
      {items?.map((item) => {
        const info = item?.card?.info;
        return (
          <div key={info?.id} className="border-b py-4">
            <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button></div>
            <img
              src={item_url + info?.imageId}
              alt={info?.name}
              className="w-32 h-32 object-cover mb-2"
            /></div>
            <h3 className="font-semibold text-lg">Item: {info?.name}</h3>
            <h3 className="text-gray-600">Price: ₹{info?.price / 100 || info?.defaultPrice / 100}</h3>
            <p className="text-sm italic text-gray-500">{dummy}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Itemcard;
