// const RestaurantCard = (props) => {
//     // const { resName,cuisine } = props;
//     const {resData}= props
//     const {
//         name,
//         cloudinaryImageId,
//         cuisines,
//         costForTwo,
//         deliveryTime,
//         avgRating
//     }= resData?.data;
//     return (
//         <div className="res-card" style={{ background: "#f0f0f0" }}>
//             <img
//                 className="res-logo"
//                 alt="res-logo"
//                 src= {cloudinaryImageId}
//                 // "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg"
//             />
//             <h3>{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{avgRating} stars</h4>
//             <h4>{costForTwo/100} For Two</h4>
//             <h4>{deliveryTime} minutes</h4>
//         </div>
//     )
// }
// export default RestaurantCard
import {CDN_URL} from "../utilis/constanants";
const RestaurantCard = (props) => {
    // const { resName,cuisine } = props;
    const {resData}= props
    // console.log(CDN_URL)
    const {
        name,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        sla,
        avgRating
    }= resData?.info;
    // console.log("cloudinaryImageId",cloudinaryImageId,CDN_URL)
    return (
        <div className="res-card" style={{ background: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src= {CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}
// export default RestaurantCard



export default RestaurantCard