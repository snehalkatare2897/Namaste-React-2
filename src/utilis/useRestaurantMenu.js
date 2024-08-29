import { MENU_API } from "../utilis/constanants";
import { useState, useEffect } from "react"


const useRestaurantMenu = (resId)=>{
    const [resMenu, setresMenu] = useState(null)
        useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json()
        setresMenu(json.data)
    }
    return resMenu;
}

export default useRestaurantMenu