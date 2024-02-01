# Namaste React 🚀⚛️

# What Parcel is Doing?
- Dev Build
- Local Server
- HMR =  Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - Supports older browsers
- Digonastic
- Error Handling
- HTTPs
- Tree Shaking Algorithm - Removes unused code.
- Different dev and prod bundles.

# When using Parcel why it conflicts when using production build with the "main" : <index.js> in package.json?
- When we use parcel we gave the entry point in the cli and in dev build we gave it in the package.json for npm. 
so it conflicts with "main" in the package.json. for prod build remove the "main" fromt he package.json.

# Where the code goes when we do a production build? (npm parcle build <filename.js/html>) 
- The code goes to the dist folder. It Do all the processing and it also create the bundle in the dist folder.
also .parcel-cache use by the dist folder and when there is a change it will be updated in the dist folder. and reflect in our webstie.

# How parcel dev build takes less time each time we modifie the code and saves it?
- Because Parcel on first run takes more time and then it .parcel-cache is created which has the cache of the code.

# Why Production build takes more time than dev built?
- because it do all the processing on our code. running all sorts of algoristhms and optmizating code, images optimization, compession, tree shaking, HMT, localserver, http, removing exta spaces, minification, bundling, etc.

# Laying the foundation - 03

# npm start is equivalent to npm run start.

# npm run start behind seens executes the package parcel with index.html becasue we have configured it in our package.json. 

# What does render() do?
    React.createElement() creates an Object. 
    When we do root.render(). The ReactDOM takes this object and converts it into 
    a HTML Element and then push it to the Browser DOM. 
    Push it Means that it replace everything present in the root element of index.html

# ***** Good Practice: ************************************************************

# A good practice for index.html:
    <div id="root">
        <h1>Not Rendred | Soul ✨</h1>
    </div>
    So where react is not able to render it properly. It will render this h1. 
    We know it that there is problem with our render.

# *********************************************************************************

# React.createElement() is an Object and when it is rendred on browser it will be converted into HTML element

# What is JSX?
    JSX - is HTML-Like or XML-Like Syntax, but is not HTML in JS. 

# How we create React Element in core React?
    const heading = React.createElement(
        "h1", 
        {id: "heading"}, 
        "Namaste React ✨🚀"
    );

# How you create React element using JSX?
    const jsxHeading = <h1>Namaste React using JSX ✨🚀</h1>.

# Is JSX a part of React ?
    No, JSX is different and React is different.
    JSX is a different Syntax, It helps to write code in React easily.

# JSX - is HTML-Like or XML-Like Syntax, but is not HTML in JS.
- Example: const jsxHeading = <h1 className="head">Namaste React using JSX ✨🚀</h1>

# Following peice of code is valid JavaScript Code?(const jsxHeading = <h1 id="heading">Namaste React using JSX ✨🚀</h1>)
    This is not Valid Pure JavaScript Code. JS engin can't read it.

# Now then how it getting rendred on the browser?
    JSX is 'Transpiled' before it reaches the JS Engine.

# Who is Transpiling our JSX code?
    Parcel is Doing it.

# Does Parcel Does this by itself?
    No, Parcel has package that is Babel. and Babel Transpile this JSX Code.

# What is Transpileing?
    It means that conveting the code into code that JS Engine can understand.     

# Does Babel only Transpile JSX?
    No, It converts modern ES6 Js into old JS that older browser can understand.

# Babel is a JavaScript compiler.

# This is a vaild JSX if it is in one line 
- const jsxHeading = <h1 className="head">Namaste React using JSX ✨🚀</h1>;

- To write it in JSX in multiple lines is wrap our JSX in parenthesis => ()
- like this 
    (<h1 className="head">
        Namaste React using JSX ✨🚀
    </h1>)
- This helps babel to identify where our JSX is startign and where its ending.


# React Component
* There are two type of React Component.
- Class Based Component - OLD
- Functional Component - NEW

# What is React Functional Component?
- JavaScript Function that returns some peice of JSX or React Element.
```
    const HeadingComponent = () => {
        return <h1>Namaste React From React Functional Component ✨🚀</h1>;
    };
``` 

# What is Component Composition?
- Adding React Component into the React Component is called Component Composition 
- Example:
```
    Conponent 1:
    const Title = () => <h1 id="heading">Namaste React Element✨🚀</h1>

    Conponent 2:
    const HeadingComponent = () => (
        <div id="container">
        <Title/>
        <h1 className="head">Namaste React From React Functional Component ✨🚀</h1>
        </div>
    );
```

# In side of {} we can write any valid JS code. mostly we write evaluated (final result of JS expression) expressions in it.

# How to insert React Element into another React Element?
- Example:
- React Element 1:
```
    const span = (
        <span>I am Learning</span>
    )

```

- React Element 2:
```
    const title = (
        <h1 id="heading">
            { span } 
            Namaste React Element✨🚀
        </h1>
    );
```

# Note: inside {}
* Suppose we are clling an API, but that api is Mellicious Script. Using this Someone trying to XSS (Cross Site Scripting) Attack.
* Our JSX doesnt Blindly runs any script. 
* JSX first Sanitize it and then runs it. 
* Even when Mellicious Script is passed JSX it will escapes it.

# We can also pass functions iside this {}
```
    const Title = () => <h1 id="heading">Namaste React Element✨🚀</h1>
    
    const HeadingComponent = () => (
        <div id="container">
            {Title()}
            <h1 className="head">Namaste React From React Functional Component ✨🚀</h1>
        </div>
    );

```

# Talk is cheap, show me the code! - 04

# What are props?
- In Functional Component passing props is same as passing arguements in Javascript function.
- props is an object. That has the arguements passed to the Functional component from other components/elements.


# What is config driven UI?
- Config driven UI is used to controll the UI bases on the configurations or the data coming from the backend api.
example: 
    we want our e-commers website to work in different places. so we wont we making different website right. so what we do is send data from the backend accoring to location of other configurations. accoding to the DATA our layout of website or UI changes. 

# Why we need key in list in react?
- Because if a list element doesnt has key then react will not know which element is new or old when adding or deleting the list items. Due to this react re render all the list elements. it decreases the performance of our website. So using key for list is must and it helps to identify which element is added or deleted. this also increases the performance of our website.

# Let's get Hooked - 05

# Type of Import/Export

# Default Export/Import 
- import <ComponentName> from <path>;
- export default <ComponentName>;

# Note: there can be only one default export in one file/component.

# Named Export/Import 
- import { <ComponentName> } from <path>;
- export <ComponentName>;

# Note: there can be any number of named export in one file/component.

# Note: There can be both type of export in one file/component.
- If you try to Export a same file/component it wont throw any error while EXPORTING.
- If you try to Import a same file/component with both type of Import, it throws error while IMPORTING.

# What are React Hooks?
- Hooks are just Normal JS functions that has some extra features.
- There are Different Tryp of Hooks present in React.

# Some Mostly use Hooks are..
- useState
- useEffect

# useState Hook
- it is like a normal JS variable that is specifit to react.
- Syntax : const [<VariableName>, <SetFunctionName>] = useState(<InitialValue>);
- InitialValue can be an Array, Object, String, Number, Boolean,etc.

# What useState Hooks do ?
- I keeps the Data Layer and UI layer sync (closly tight).

# Render ? 
- Whenever the state variable updated react re-renders the components.
