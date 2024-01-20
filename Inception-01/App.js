/**
 * 
 *
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h1>I'm h2 tag</h1>
 *      </div>
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h1>I'm h2 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 *  When we console React.createElement it returns an Object => that converted
 *  back to your HTML code that Browser can us form data like 
**/ 







const heading = React.createElement(
    'div', 
    {id:"parent"}, 
    [
    React.createElement('div', {id:"child"}, [React.createElement('h1', {id:"child"}, "I am h1 tag"), React.createElement('h2', {id:"child2"}, "I am h2 tag")]), 
    React.createElement('div', {id:"child"}, [React.createElement('h1', {id:"child"}, "I am h1 tag"), React.createElement('h2', {id:"child2"}, "I am h2 tag")])
    ]
);
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);