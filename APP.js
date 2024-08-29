import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import AboutPage from "./src/components/AboutPage";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import Grocery from "./src/components/Grocery";


// const head= React.createElement("h1",{id:"heading"},"Hello world from react");
// const parent = React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child1"},
// [React.createElement("h1",{},"I am a H1 tag"),React.createElement("h2",{},"I am a H2 tag")]),
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"I am a H1 tag"),React.createElement("h2",{},"I am a h2 tag")])])
// const root = ReactDOM.createRoot(document.getElementById("root"));
//to avoid to this messup code we go for the JSX
// root.render(parent)
// const heading = React.createElement("h1",{id:"heading"},"snehal Katare");
//for jsx 
// const jsxele= <h1 className="head" id="heading" tabIndex="5"> Namaste React Using JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxele)
// const Title =() => (
// <h1 className="head" tabIndex="5">Namasate React</h1>
// );

// const HeadingComponent = () =>(
//     <div id="container">
//     <Title/>
//     <h1>React Heading component</h1>
//     </div>  
// )
// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img
//                     className="logo"
//                     src="https://png.pngtree.com/template/20200704/ourlarge/pngtree-restaurant-logo-design-vector-template-image_388753.jpg" />
//             </div>
//             <div className="navitems">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us </li>
//                     <li>Conatct Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

const RestaurantCard = (props) => {
    const { resName, cuisine } = props;
    return (
        <div className="res-card" style={{ background: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>38 mins</h4>


        </div>
    )
}

// const restList = [
//     {
//         data: {
//             resName: "Meghna Fooods",
//             cuisine: "Biryani ,North indian,Asian"
//         }
//     },
//     {
//         data: {
//             resName: "KFC",
//             cuisine: "Burger ,Fast Food"
//         }
//     }]
// const Body = () => {
//     return (
//         <div className="Body">
//             <div className="search">search</div>
//             <div className="res-container">
//                 <RestaurantCard
//                     resName="Meghna Fooods"
//                     cuisine="Biryani ,North indian,Asian" />
//                 <RestaurantCard
//                     resName="KFC"
//                     cuisine="Burger ,Fast Food" />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//             </div>
//         </div>
//     )
// }

const Grocery = lazy(()=> import ( "./src/components/Grocery"))
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

//for Routing multiple page
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            }, {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading</h1>}>
                <Grocery/>
                </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }],
        errorElement: <Error />,
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)