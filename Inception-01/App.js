import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    'div', 
    {id:"parent"}, 
    [
        React.createElement('div', {id:"child"}, [
            React.createElement('h1', {id:"child"}, "The Namaste React ⚛️"), 
            React.createElement('h2', {id:"child2"}, "Parcel Doing As soon as i save file it reflects on our local server")
        ]), 
        React.createElement('div', {id:"child"}, [
            React.createElement('h1', {id:"child"}, "I am h1 tag"), 
            React.createElement('h2', {id:"child2"}, "I am h2 tag")
        ])
    ]
);
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);