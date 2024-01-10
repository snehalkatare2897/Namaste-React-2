const head= React.createElement("h1",{id:"heading"},"Hello world from react");
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am a H1 tag"),React.createElement("h2",{},"I am a H2 tag")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am a H1 tag"),React.createElement("h2",{},"I am a h2 tag")])])
const root = ReactDOM.createRoot(document.getElementById("root"));

//to avoid to this messup code we go for the JSX
root.render(parent)