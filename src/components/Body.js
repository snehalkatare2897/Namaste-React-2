import RestaurantCard from "./RestaurantsCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStatusOnline from "../utilis/useStatusOnline";
// import Shimmer from "./Shimmer"

// let restList = [
//     {
//         data: {

//             id: "334475",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334476",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "4.0",

//         },
//     },
//     {
//         data: {

//             id: "334485",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334490",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334478",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334489",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "4.5",

//         },
//     },
//     {
//         data: {

//             id: "334484",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334483",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "4.2",

//         },
//     },
//     {
//         data: {

//             id: "334482",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },{
//         data: {

//             id: "334481",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334479",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     },
//     {
//         data: {

//             id: "334470",

//             name: "KFC",

//             cloudinaryImageId: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg",

//             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//             costForTwo: 40000,

//             deliveryTime: 36,

//             avgRating: "3.8",

//         },
//     }]



const Body = () => {
    //usestate Hooks
    //local state variable -super power variable
    const [listofRestaturants, setlistofRestaturant] = useState([]);
    const [FilteredRestaturants, setFilteredRestaturants] = useState([]);
    const [searchText, SetsearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        //optional chaining
        setlistofRestaturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaturants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    const Onlinestatus = useStatusOnline();

    if(Onlinestatus === "offline"){
        <h1>YOU SEEMS TO BE OFFLINE PLEASE CHECK YOUR INTERNET CONNECTION !!!!!</h1>
    }


    // listofRestaturants.length === 0 ? (
    //     <shimmer />
    // ) : (
    return <div className="Body">
        <div className="filter flex">
            <div className="m-4 p-4">
                <input
                    type="text"
                    className="border border-solid border-black"
                    value={searchText}
                    onChange={(e) => {
                        SetsearchText(e.target.value)
                    }}
                />
                <button className="px-4 bg-green-100 mx-4  items-center rounded-lg"
                onClick={() => {
                    console.log(searchText);
                    const filteredRestaturant = listofRestaturants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaturants(filteredRestaturant);
                }}
                >Search</button>
            </div>
            <div className="m-4 p-4">
            <button
                className="px-2  bg-gray-100 mx-1 flex items-center rounded-lg"
                onClick={() => {
                    const filterRestList = listofRestaturants.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    console.log(filterRestList)
                    setFilteredRestaturants(filterRestList)
                }}
            >
                Top Rated restaurants
            </button>
            </div>
        </div>
        {/* <div className="search">search</div> */}
        <div className="res-container flex">
            {FilteredRestaturants.map((restaurant) => (
                <Link key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
            ))}
        </div>
    </div>
    // )
}

export default Body