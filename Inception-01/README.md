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
- We use react-router-dom as this allows us to navigate from one page to another.

# Why we need react-router-dom package?
- Because react-router-dom uses Client Side Routing to navigate from one page to another.
- Due to this we dont need to make any network calls.

# How do we use react-router-dom package?
- Step 1: npm install react-router-dom
- Step 2: Import the createBrowserRouter from react-router-dom
- Step 3: createBrowserRouter method will take array as parameter.
- Step 4: In array we setup our routers. 
- Step 5: Import the RouterProvider Component and pass the routers we creted to this RouterProvider as router Prop.
- This allows our app to enable the Routing. 

# How to handel the error page?
- We pass the errorElement with the fallback Component that displays where there is error in given the path/ or trying access when the path doesnt exists.

# Why we use useRouteError hook?
- This hook allows us to catch the erros in the path and we can disply the erros to the user.

# How do we use useRouteError hook?
- we import the useRouteError hook from the react-router-dom library. anad store it into the variable. 
- useRouteError hook returns the error object.

# How do we pass Childrens routes to our AppRoutes?
- We one component has other child routes. then we use children array and pass the each child route in their object.
- but to use children we need to use the outlet component.


# How do we make our app dynamic that everytime our path changes but the header and footer remains same?
- using the Outlet component we can make our app dynamic.
- we create an component where we give all the Components that are common in other pages. 
- Between those components we give the outlet component.
- What this will do it that. when the path changes it replaces the outlet component with the new component we required.

# What is Link in react?
- Link allows us to create the special anchon tag.
- That allows us to do client side routning without making network calls to fetch the new component.

# Why we use how?
- We wrap the <Link><Component></Link>
 
# What are various ways to add images into our App? Explain with code examples
- we can add images using following ways.
1. img tag that directly taks the url in form of string.
2. we can also pass the src={} and in curlies we pass the variable that hols the Image link.
3. we can also import the images as Component and pass that component to the src. 

# What would happen if we do console.log(useState())?
- It returns an Array of length 2. 
- First is the initial value.
- Second is the updater function.

# What is SPA?
- SPA stands for Single Page Application.
- This means that we have only one page in our web page.
- We just replace the content in this single webpage. 
- and Displays it on the UI.

# Two types of routing in webapps.
1. *Client Side Routing*:
- When we use the link to navigate to another page. it already has the code for the page we are navigating.
- it simply replace the current html to the new html. *Without Making any network calls*. it doesnt reload the page. 

2. *Server Side Routing*:
- When we use anchor tag to navigate to another page. it make a *network call to fetchs the html for that page* and show it to the user.
- It reloads the whole page.

# Lets get classy - 08

# Read abt createHashRouter, createMemoryRouter from React Router docs.

# What is the order of life cycle method calls in Class Based Components
- First Constructor is called. 
- Second Render method is called.
- Third ComponentDidMount method is called.
- If there is a change in state the ComponentDidUpdate method is called.
- When we move one page to another ComponentWillUnMount mehtod is called.

# Why do we use componentDidMount?
- We use ComponentDidMount because it is called only once after the render is called.
- This Allows us to make API calls inside it.

# Why do we use componentWillUnmount? Show with example
- It is used to clean the APIs, Timers, Events that doesnt required anymore.
- When we move to next page this clears everything so that there wont we any memory leaks.

# (Research) Why do we use super(props) in constructor?
- When we extends the class from another class.
- so to access the partents props and methods we use super() method. 
- to call the parents class.
- this allows child class to access parents props and methods. 

# (Research) Why can't we have the callback function of useEffect async?
- Beacuse useEffect expects its first arguement to be function to cleanup function or nothing at all(undefined). When we use async on the callback function it returns a prmoise. Promise cannot be counted as the function. 
- Hence, It Throws an error.

# Write a console.log for each lifecycle method
- In which order the parent class componet and child class component will be rendered.
- When Parent has only one child 
- Parent Constructor
- Parent render
  - Child Constructor
  - Child Render
  - Child ComponentDidMount
- Parent ComponentDidMount

# Play with the console logs to find out the correct order of their execution

# When Parent has more than one child
# This is Render Phase

- Parent Constructor
- Parent render
  - First Child Constructor
  - First Child Render
  - Second Child Constructor
  - Second Child Render
  
# This is Commit Phase
- First Child ComponentDidMount
- Second Child ComponentDidMount
- Parent Child ComponentDidMount
  
- This is happening because updating element in actual DOM happend in two phases.
- Render Phase and Commit Phase. 
- As Render method is fast and not expensive as DOM updating. 
- Thats why React BATCH The RENDERS And Compute them and Schedule them.
- In COMMIT PHASE React actually updates the DOM. So it does it from the Batch Scheduled.

# Create interval inside componentDidMount?
- When we do so it start the interval.
- When if we navigate to another page it is still running.
- and when come back to the same page it start one more timer and it addsup to the previous timer  everytime we nagivate to another page and comes back.

# Use clearInterval to fix the issue caused by that interval
- To clearInterval we use ComponentWillUnmount method.
- we assign the this.timer variable to the interval.
- calls this.timer in ComponentWillUnmount method and clears the interval everytime we nagivate from one page to another.

# Optimizing our app - 09

# How to think to build your custom hook
- Think of the contract of the hook i wanna build.
- Contract means - kya inout hoga and kya output hoga.
- Then implement the functionality / logic about what you want to achieve.
- Then return the output.
- At the end Export the hook.

# How to do Code Splitting | Chunking | Dynamic Bundling | Lazy Loasding | On Demand Loading | Dynamic import

- We do code splitting so that our webapp doesnt need to Load all the components at once as well as when we need to reduce the size of our bundle. 
- use use the lazy method provided by thee react library.
- Lazy imports the specific component dynamically on demand.
- To effectively use lazy loading we use Suspence component as a fall back for the lazy loaded component so that when there its loading and geeting the data  it render the fallback UI instead of any error.


# Jo Dikhta Hai Vo Bikta Hai - 10

# Type of CSS libraries and framewrorks.
- SASS, SCSS, 
- Styled Components, Matrial UI, Chakra UI, Ant UI, 
- TailwindCSS

# In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
1. content: [], This array takes the paths for where to look for the css in our project.
2. theme: {}, This is the object takes specific properties like colors , spaces, breakpoints, etc..  
3. extend: {}, This allows us to create our custom classes. That are qunnique to our project.
4. plugins: [], This Array takes and plugins that allows us to use different and thirdparty libraries adding more functionalities.

# Why do we have .postcssrc file?
- we use this to se the configuration of postcss. With the help of this config we tell out postcss that this is how our css is defined and it takes case of minifying our css as well as manage how css classe we gave using tailwind should proccessed. 

# Data is the new Oil - 11

# What is Higher order Components?
- It takes a component and returns a component
- It takes a component and enhances/modifies it and returns a component

# What is prop drilling?
- When we require to pass the data from components where we didnt required and we just pass it from there to the required component. this is called props drilling.

# What is lifting the state up?
- Lets assume we creating an Todo App. It has two components one is TodoCard and TodoList.
- So TodoCard child of TodoList component. We passing the data from TodoList to TodoCard.
- There is one more feature that TodoCard has it is the select button.
- And we have the DeleteButton for TodoCard in the TodoList.
- Now Problem is that we dont have the access to the Selected TodoCard.
- To solve this problem we use lifitng the state. 
- It Simply means that we are controlling the state of child from parent.
- Now we just Migrate our Selected state from TodoCard to TodoList Component.
- From there we Pass our Selected State with its updater function to TodoCard component.
- Now in TodoCard we set the even onClick to the select button.
- When user clicks it selects the TodoCard according to the id and it will be updated in the parent.

# What is Context Provider and Context Consumer?
- Context Provider is used to provide the context to our app or the specific part of our webapp and it created the global state.
- When we pass the provided we allow our app to difrectly get the passed Context value and use it where we required it.
- Context Provider uses the useContext(<ContextWeCreated>) hook. We use it to get the Context value.  

- Context Consumer is used to get the context we created firectly in out app by wrapping it over our component we want and it takes a callback function and in callback we get our context and we extract from there and uses it.
-  Context Consumer uses the props approach to access the Context Value.

# If you don’t pass a value to the provider does it take the default value?
- Yes, we can pass the default value to the provided.
- So When we dont give any value to the provider it will take the default value.