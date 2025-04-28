const parent= React.createElement("div", { id: "parent"}, 
    [React.createElement("div", { id: "child 1"}, 
        [React.createElement("h1", { id:"heading"}, "I am child 1 h1 tag"),
        React.createElement("h2", { id:"heading"}, "I am child 1 h2 tag")]),
        React.createElement("div", { id: "child2"}, 
            [React.createElement("h1", { id:"heading"}, "I am child2 h1 tag"),
            React.createElement("h2", { id:"heading"}, "I am child2 h2 tag")])     
    ]);


const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "Hello React JS!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);