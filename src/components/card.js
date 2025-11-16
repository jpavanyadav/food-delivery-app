import { CDN_URL } from "../util/constants";

const RestaurantCard = (props) => {
const logo=props.cloudinaryImageId;
    return(
      <div className="m-4 p-10 w-[250px] h-100px rounded-lg bg-gray-100 hover:bg-gray-200">
            <img  className="photo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ logo}/>
      <h3 >{props.resname}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.rating} stars</h4>
      
        </div>
    )
 }
export default RestaurantCard;