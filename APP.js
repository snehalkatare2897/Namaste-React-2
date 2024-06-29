import React from "react";
import ReactDOM from "react-dom/client";

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
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://png.pngtree.com/template/20200704/ourlarge/pngtree-restaurant-logo-design-vector-template-image_388753.jpg" />
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us </li>
                    <li>Conatct Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return(
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}
const Body = () => {
    return (
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)