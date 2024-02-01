import { useState } from "react";
import { resList } from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {


  const [restaurantList, setRestaurantList] = useState(resList);

  return (
      <div className="body">
        <div className="filter">
          <button 
            className="filter-btn"
            onClick={() => {
              let list = restaurantList.filter((item) => item.info.avgRating >= 4.5);
              console.log(list);
              setRestaurantList(list);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {
            restaurantList.map((card) => <RestaurantCard key={card.info.id} resData={card} /> )
          }  
        </div>
      </div>
    )
}
export default Body;