import { useParams } from "react-router-dom";
import { useState, useEffect  } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const ResraurantMenu = () => {
    const [menuList, setMenuList] = useState(null);
    const params = useParams();
    const {resId} = params;
    useEffect(() => {
        fetchMenuData();
    }, []);
    
    const fetchMenuData = async() =>{
        try {
            const data = await fetch(MENU_URL+resId)
            const json = await data.json();
            console.log(json);
            console.log(params);
            setMenuList(json?.data);        
        } catch (error) {
            console.log(error);
        }
    }
    
    if(menuList == null) return <Shimmer />;
    const {name, costForTwoMessage, cuisines} = menuList?.cards[0]?.card?.card?.info;
    const {itemCards} = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
    return  (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3>Menu</h3>
            {itemCards.map((item)=>(
                <div key={item?.card?.info?.id}>
                    <div>
                        <ul>
                            <li>{item?.card?.info?.name}</li>
                            <li>{item?.card?.info?.description}</li>
                            <li>Rs. {(item?.card?.info?.defaultPrice || item?.card?.info?.price)/100 }</li>
                            <li>{item?.card?.info?.ratings?.aggregatedRating?.rating} Stars</li>
                        </ul>
                    </div>   
                </div>
            ))}
        </div>
    )
}

export default ResraurantMenu;