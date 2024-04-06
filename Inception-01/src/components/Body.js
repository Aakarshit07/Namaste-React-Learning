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
      </div>
    )
  }

  if(onlineStatus === false) {
    return <h1>Looks like you'r offline, Please check your internet connection.</h1>
  }

  return (
    <div className="my-4">
      <div className="flex justify-start items-center gap-4 m-4 px-10 py-4">
        <div className="flex justify-between items-center">
          <input 
            className="border-2 border-r-0 border-gray-400 rounded rounded-r-none px-2 py-1 outline-none"
            placeholder="Your favorite food here " 
            type="text" 
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button 
            className="border-2 border-gray-400 rounded px-2 py-1 outline-none rounded-l-none text-gray-600 hover:text-white hover:bg-gray-400/95 font-semibold"
            onClick={()=> {
              const filterlist = restaurantList.filter(
                (item) => item.info.name.toLowerCase().includes(searchText.toLowerCase().trim()));
                console.log(filterlist);
              setFilteredRestaurantList(filterlist);
            }}
          >Search</button>
        </div>
        <div className="hidden md:block">
          <button 
            className="border-2 border-gray-400 rounded px-2 py-1 outline-none text-gray-600 hover:text-white hover:bg-gray-400/95 font-semibold"
            onClick={() => {
              let list = restaurantList.filter((item) => item.info.avgRating >= 4.5);
              console.log(list);
              setFilteredRestaurantList(list);
            }}
            >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12  m-4 p-4">
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