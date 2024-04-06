import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenuDate";

const ResraurantMenu = () => {
    const params = useParams();
    const {resId} = params;

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer />;
    
    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
        || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)  
    
    return  (
        <div className="flex flex-col items-center">
           <div className="border-2 m-4 p-2 rounded-md text-left">
                <h1 className="text-3xl font-semibold text-gray-600/100">{name}</h1>
                <h3 className="text-lg text-gray-500/95">{cuisines.join(", ")} - {costForTwoMessage}</h3>
           </div>
            <div className="">
                {itemCards && itemCards.map((item)=>(
                    <div key={item?.card?.info?.id} className="border-2 p-4 rounded-md m-2">
                        <div>
                            <ul>
                                <li>{item?.card?.info?.name}</li>
                                <li>{item?.card?.info?.description}</li>
                                <li>Rs. {(item?.card?.info?.defaultPrice || item?.card?.info?.price)/100 }</li>
                                <li>{item?.card?.info?.ratings?.aggregatedRating?.rating || "Not Ratings Found* "} Stars</li>
                            </ul>
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResraurantMenu;