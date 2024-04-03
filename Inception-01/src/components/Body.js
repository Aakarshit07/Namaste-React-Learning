import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus =useOnlineStatus();
 
  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  }, [])

  const fetchData = async() => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
      );

      const json = await data.json();
      console.log(json);
      // optional chaining
      setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log(error.message);
    }

  }

  if(restaurantList.length === 0) {
    return (
      <div className="Shimmer-body">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    )
  }

  if(onlineStatus === false) {
    return <h1>Looks like you'r offline, Please check your internet connection.</h1>
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input 
            className="search" 
            type="text" 
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button 
            className="search-btn"
            onClick={()=> {
              const filterlist = restaurantList.filter(
                (item) => item.info.name.toLowerCase().includes(searchText.toLowerCase().trim()));
                console.log(filterlist);
              setFilteredRestaurantList(filterlist);
            }}
          >Search</button>
        </div>
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
          filteredRestaurantList.map((card) => (
            <Link key={card.info.id} to={"/restaurants/"+card?.info?.id}>
              <RestaurantCard resData={card} />
            </Link>
          ))
        }  
      </div>
    </div>
  )
}
export default Body;