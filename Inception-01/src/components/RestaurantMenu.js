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
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3>Menu</h3>
            {itemCards && itemCards.map((item)=>(
                <div key={item?.card?.info?.id}>
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
    )
}

export default ResraurantMenu;