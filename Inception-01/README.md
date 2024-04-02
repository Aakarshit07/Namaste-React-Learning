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
    No, Parcel has package that is Babel. Babel Transpile this JSX Code.

# What is Transpileing?
    It means that converting the JSX code into code that JS Engine can understand.     

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
- This helps babel to identify where our JSX is starting and where its ending.


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
# Laying the foundation - 03

# Assignment:

## What is JSX?

- JSX is HTML like or XML like syntax, that is the extension for JavaScript syntax. it let us write HTML like syntax/markup in JavaScript.

## Superpowers of JSX?

- Allows developers to easily write HTML markup and CSS and JavaScript altogether with better and easy syntax.
- Make easy to maintain code in JSX syntax
- Also allows you to compose components
- Allow Reusability of the components

### Role of type attribute in script tag? What options can I use there?
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?

- The use of type attribute in script tag is that it allows to export and import a component as module.
- This allows to easily import and export the components we require.
- {TitleComponent} : Used when we have to write any valid JavaScript
- {<TitleComponent/>}:  used when component does not have any children.
- {<TitleComponent></TitleComponent>} : Used when we have to wrap another component inside any components.

## Coding Assignment:

Create a Nested header Element using 

- React.createElement(h1,h2,h3 inside a div with class “title”)
Create the same element using JSX
Create a functional component of the same with JSX
Pass attributes into the tag in JSX
Composition of Component(Add a component inside another)
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- Create a Header Component from scratch using Functional Components with JSX
Add a Logo on left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice



# Talk is cheap, show me the code! - 04

# What are props?
- In Functional Component passing props is same as passing arguements in Javascript function.
- props is an object. That has the arguements passed to the Functional component from other components/elements.


# What is config driven UI?
- Config driven UI is used to controll the UI based on the configurations or the data coming from the backend api.
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

# React Fiber Algorithm 
- Used in React's reconciliation process that was introduced in React 16.
- It Uses Diffing algorithm to compare the changes in virtual DOM  and real DOM and then update the real DOM Efficiently. 
- It also offers many more featurs like code spllitting and smooth re-rendering.

# Diffing algoritm
- It is used to compare the changes in virtual DOM and real DOM.
- It is a part of Fiber Algorithm.

# Exploring The World - 06

# What is Monolith vs Microservices architecture?
### Monolith architecture: 
- Has one Project for all the services. 
- Such as For UI, Backend, Database, APIs, Authentication and etc. 
- They have everything inside of one projects.
- So problem like they are even if you have to make small changes you has to complie the whole project again to reflect it.

### Microservices architecture: 
- Has many Projects for each service. 
- Such as For UI, Backend, Database, APIs, Authentication, and etc. 
- They have separate Services.
- Having different services also called Speration of Concern.
- They talk to each other depenging on usercase.
- Combining together each services becomes one Project.
- Single Responsibility principle. Where one service has one function and it is responsible for one thing.

# Two approaches to render webpage ?
- 1. Page Loads --> API --> Render.
- 2. Page Loads --> Render --> API --> Render.

# In React we will be using 2nd approach. Why?
- Because it Probive Better User Exprerience ( UX ).
- It provied the smooth transiting from showing less data on page and then the full data.

# useEffect Hook.
- It is a Hook that runs after the render.
- It is used to call the APIs, event subscribing, and unsubscribing.
- It also helps to handle the side effects.
### Example:
- we have and api that will fetch data from Swiggi. we will use useEffect Hook to fetch the data. 
- It render the card it is like subscribing to the event.
- so when user goes to next page we want out card to remove and replaced withsometing. so to clean these events we use useEffect Hook's unsubscribing event.

- useEffect Hook takes two Arguements.
1. Callback
2. Dependency Array.

- There Are 3 useCases of using useEffect.
1. When we want out component rerender whenever there is an change in any local state of the component. 

### Example: 
- We dont give any  dependency array.
- useEffect(() => {}, );

2. When we have to render the component only once. fetching data from Api and rendering the data using card.

### Example: 
-We give any empty dependency array.
- useEffect(() => {}, []);

3. When we have to trigger the re-render when ever there is a change in certain state. so it only re-renders when the that perticular state changes.

### Example: 
-We give any state variable in dependency array.
- useEffect(() => {}, [<Some state variable>]);

# What will happen if we try to call an Swiggi Api or any other api from our localhost?
- We get an error. Access frtch <API URL> has been blocked by the CORS Poilicy.

# Why we get this error?
- Because our browser is not allowing the API call from our localhost to Swiggi's API / from one origin to another origin. 
- Whenever there is an Origin Mis-match browser blocks that api call.

# What is Shimmer UI?
- As we see the website when they are loading they show the empty UI like in Youtube it show the Vido Card.
- and when loading is done we render our original UI with data.

# Why we use Shimmer UI?
- Shimmer UI helps in Improving an User Exprience

# UseState?
- Whenever the local state changes, react triggers a reconciliation Cycle (Re-rencders the component).

# Example:-
- When we do onChange on the Inputtext field. everytime a key is pressed it triggers a re-render of the component. 

# What is the difference between JS expression and JS statement?
- *JS expression:* It is evaluate to some value.

### Example: 
- A + B = <Some value>.
- Like we calculated the filteredList in our code.

- *JS statement:* It is like performing an action and controling the flow of our programm.

### Example: 
- If(Age > 18) { Console.log("You can apply for a driving license") }
- Like we rendring the Shimmer Ui when FilterList length is zero. and when it is not we rendered our Original cards.


# What is Conditional Rendering, explain with a code example?
- we use conditional rendring to make our app more dynamic.
- using condition we render our UI.

### Example: 
- Like we built the Login and Logout Button functionality.
- When user is logged in we render the Logout Button. otherwise we render Login Button.
- we are achiving it using if-else/ternary operator condition.

- Same for the Shimmer UI.


# What is async and await?
- Async and await is a new way to handle promises.
- It allows us to write asynchronous code in a synchronous way.
- It also provide the clean syntax fro writing the promises.

# What is the use of `const json = await data.json();` in getRestaurants();

- When we first fetch the data from the API. It returns a Promise.
- To convert that promise into the actual data object. we use await keyword.
- when promise is settled eventually. our await handles this and returns the actual data from the api. 
- Now api data is ready to use.

# What is Optional Chaining?
- Optional Chaining is a way to handle the data. 
- Assume we have an object or function to call.
- we want to get the property that is nested inside that object or function. there we use ?. operator.
- *userObject?.userDetails?.PersonalInfo?.name*
- So it always check is we have userObject. then it mover forword and checking till end.
- If it encounter any value that is undefined or null it returns undefined instead of throwing an error.

# Finding the Path - 07

# How do we navigate from one page to another in react?

# Why we need react-router-dom package?

# How do we use react-router-dom package?

# How to handel the error page?

# What is the useRouteError hook?

# Why we use useRouteError hook?

# How do we use useRouteError hook?

# How do we pass Childrens routes to our AppRoutes?

# How do we make our app dynamic that everytime our path changes but the header and footer remains same?

# How to we use Outlet ?

# What is Link in react?

# Why we use Link and how?

# What are various ways to add images into our App? Explain with code examples

# What would happen if we do console.log(useState())?

# What is SPA?


# Two types of routing in webapps.
1. *Client Side Routing*:
- When we use the link to navigate to another page. it already has the code for the page we are navigating.
- it simply replace the current html to the new html. *Without Making any network calls*. it doesnt reload the page. 

2. *Server Side Routing*:
- When we use anchor tag to navigate to another page. it make a *network call to fetchs the html for that page* and show it to the user.
- It reloads the whole page.

# Lets get classy - 08


