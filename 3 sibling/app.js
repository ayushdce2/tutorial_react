const title = React.createElement(
    
    "div",
    {id:"one"},
    [
       React.createElement("h1",{id:"child1"},"Hello world"),
       React.createElement("h1",{id:"child2"},"Hello world")
    ]
    );

const location_app = ReactDOM.createRoot(document.getElementById("root"));
location_app.render(title);
    