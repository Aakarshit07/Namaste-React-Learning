import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const  { resData } = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor: "rgba(251, 144, 83, 0.491)"}} >
          <img  className="res-img" src={CDN_URL+cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;