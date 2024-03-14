import { useState } from "react";
import { resList } from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState(resList);
  const [search, setSearch] = useState("");

  let searchByFilter = (e) => {
    let searchItem = e.target.value;
    setSearch(searchItem);
    const filteredList = searchItem ? 
    resList.filter(
      (item) => item.info.name.toLowerCase().includes(search.toLowerCase()))
    : resList;  

    setRestaurantList(filteredList);
  }

  return (
      <div className="body">
        <div className="filter">
          <input 
            className="search"
            value={search}  
            onChange={ searchByFilter } 
            type="text"
          />
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