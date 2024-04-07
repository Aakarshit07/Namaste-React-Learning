import { ChevronUp, ChevronDown } from 'lucide-react';
import MenuItemsList from './MenuItemsList';
import { useState } from 'react';
function RestaurantCategory({data}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOnClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="my-4 rounded-md">
            <div className="bg-gray-100 shadow-md flex justify-between p-4 rounded" onClick={handleOnClick}>
                <h3 className='font-bold'>{data.title} ({data.itemCards.length})</h3>
                { isMenuOpen 
                    ? <ChevronDown className='hidden md:block' />
                    : <ChevronUp className='hidden md:block' />
                }
            </div>
            <div className="text-left">
                {isMenuOpen && <MenuItemsList data={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;


