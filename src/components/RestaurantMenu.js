import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilis/constanants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const [resMenu, setresMenu] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const { resId } = useParams();
    console.log("resId", resId)

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId)
        const json = await data.json();
        console.log("resId2", json.data)
        setresMenu(json.data);
    };
    if (resMenu === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } =
        resMenu?.cards[2]?.card?.card?.info;

    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(" ,")}-{costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name}- {"Rs."}
                        {item.card.info.price / 100 || item.card.defaultprice / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu