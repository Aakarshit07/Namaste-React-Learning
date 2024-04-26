# Inception - 01:
# Assignment: 
### Theory -

● What is Emmet?

> ***“Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow:”***

● What is plug in?

A plug-in is a software component that adds a specific feature to an existing computer program.

● Difference between a Library and Framework?

Library: It is used to target the specific functionality and less strict about how and what to do. you set the data flow.

Framework: It is tries to provide everything that required to develop an application and Rules a strict about how, where and what to do. 

Data flow is set by the Framework.

● What is CDN? Why do we use it?

A **CDN** stands for **Content Delivery Network**, Instead of delivering the content from one central 

location. CDN is like a small stations scattered around the globe with the help of CDN it copy the data into various location, and when ever we require this data. It connect to the nearest station and delivery the content.

We use CDN because it has **faster loading time**, as well as **Improved reliability, Enhanced Security.**

● Why is React known as React?

**It "reacts" quickly to changes without reloading the whole page**. It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "**react**" and **update**.

● What is crossorigin in script tag?

The `crossorigin` attribute is set in script tag to set the mode of HTTP request.

it is used when our server require to load resources  from another domain. resources such as (image, stylesheets, audio, video, etc..)

● What is diference between React and ReactDOM

React responsible for the React core functionality.

ReactDOM deals with the Virtual DOM or How DOM operations should be hanlded.

● What is difference between react.development.js and react.production.js files via CDN?

- **CDN** ****Development (Dev) Link:****

It is used during the  development phase of the application

It has debugging tools, warning, helpful error message.

It it larger in size and this can impact performance. 

Also not optimized for production . 

- **CDN** ****Production (Prod) Link:****

It is used to deploy our application in Production environment

It does not has extra debugging tools, warning, helpful error message.

It it smaller in size which improves its performance of our application.  

Optimized for production  use. 

● What is async and defer? - [**Video**](https://www.youtube.com/watch?v=IrHmpdORLu8)

> When Browser Loads A website there are to Major thing Happens
> 
1. **HTML Parsing**
2. **Script Loading**

Script Loading has 2 parts **Fetching an script** from the network and **Executing an Script line by line**

- How All these happens
- When we just using website which doesn’t use Async or Defer.
    
    **HTML Parsing** happens and When it encounters the script tag it stops the parsing of HTML and it start to **Fetch Script**  then **Executes script** after that it continues to parse the HTML.
    
- When website use Async.
- When to use async ?
- Mostly used when the scripts are not dependent on each other.
    
    **HTML Parsing** happens and **parallelly** **Fetch Script**  when it done fetching it script. it stops the parsing of HTML. It start to **Executes script** after that it continues to parse the HTML.
    
- When website use Defer.
- When to use defer ?
- Can be used when the scripts are even dependent on each other.
    
    **HTML Parsing** happens and **parallelly** **Fetch Script**  when it done **HTML parsing**. It start to **Executes script.**
  
![alt text](https://github.com/Aakarshit07/Namaste-React-Learning/blob/main/Assignments/assets/HTML%20Parser%20Async%20and%20Difer.png?raw=true))

# Igniting our App - 02

# Theory Assignment:

- What is package.json ?
    
    It is a Configuration file for npm.
    

● - What is `NPM`?

 NPM is an package manage for JavaScript. It manages the node packages in our project.

It keeps track of what dependencies are installed and what version it supports?, what dependencies are normal or dev? It has all configs about our project.

● - What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack both are bundlers. 

Now question is what is bundlers ?

Bundlers are the tool that help to build modern web app that help to do lots of things such has

optimizing the app and providing extra features.

What Parcel/Webpack does?  

Example: Let say our project has files like script.js file, style.css, index.html etc.

What Parcel does is that it takes all the files and bundled them together optimize them, so that Bowser can read then quickly while removing extra spaces. and other sorts of algorithms are included such as watcher algo, Hot Module  Replacement, 

It also provide functionality of **Transpiles** the our code like arrow function and all, so older browser can read them. Parcel convert them to be able to support old browsers.

Why we need them? 

Because Parcel/Webpack provides so many functionalities that ease our work and optimize our web app,  **Transpiles our code. providing Development server so that we can test our web app as we built.**

 ****

● - What is `.parcel-cache`

.parcel-cache is a folder which is made when we first run our webapp on local sever provided by parcel. so it has all the bundled files to optimize the web app performance. so if we make any changes in our app it will take less time to bundle our webapp and reflect it on our webapp. 

● - What is `npx` ?

npx is an package execute for node packages. to run any executable package we require npx.

also help to run packages without installing them can we use for testing of different packages.

● - What is difference between `dependencies` vs `devDependencies`

- Dependencies are the node packages we install in our project than these installed packages called dependencies because we these packages are required to run our webapp.

- Dev-Dependencies are the node packages we required only in the development phase of the application. and the are the packages that helps to build our webapp but without these packages we can deploy our webapp.

● - What is Tree Shaking?

**It** **statically analyzes all the imports and exports and remove everything that isn’t used.**

It even works with dynamic imports as well as cross language such as it also removes all the unused classes from the CSS file.

● - What is Hot Module Replacement?

As we make changes in our code parcel automatically rebuild the changed file and update our app.

What it does it replace the code or even css properties of a module and it doesn’t required  to refresh the pace it does it by updating the changed in the current state.

 
● - List down your favorite 5 superpowers of Parcel and describe any 3 of them in your
own words.

1. HMR
2. Tree Shacking 
3. Image Optimization 
4. Dev Server
5. Differential Bundling

HMR: It used to update the code for modules by replacing the new code and it does not refresh the page it only updates it in the current state of browser.

Tree Shacking:

It is sued to remove everything that is not being used, it even support cross language 

like Removing CSS Properties which are not being used.

Differential Bundling: Due to this it allows to support our web app for older browsers.

How It does it: .

It make different bundles that supports majority of the browsers. and when our web app encounter the older browser it automatically handles this and make a different bundle that support the older browsers.

Example: 

New browsers:

`<script type="module" src="app.c9a6fe.js"></script>`

Old browsers: 

`<script nomodule="" src="app.f7d631.js"></script>`

● - What is `.gitignore`? What should we add and not add into it?

.gitIgnore is used to ignore the files that can be regenerated and files that cant be exosed to outside world 

Files like 

Node Modules can be re installed with the help of package.json config. while we deploy it.

.parcel-cache not required as they are created always when we first run the build our our webapp.

.env files as they contains environment variables that cant we exposed to outside world.

● - What is the difference between `package.json` and `package-lock.json`

package.json is a config file that keeps the track or our installed packages and dividing the dependencies into two type one is normal and other is dev.

and the version or the current installed dependencies.

package-lock.json contains the hashing key for each installed dependencies and keep track of exact package version. so that it does not create and inconsistencies  due the the newer version of installed packages.  also by using hashing it validated the authenticity when we install the new version of package that already exists.

● - Why should I not modify `package-lock.json`?

Because it can cause inconsistencies in our project.

● - What is `node_modules` ? Is it a good idea to push that on git?

Node modules are the install package files and its dependencies and those dependencies has other dependencies.  these  works as the database for the packages we install in our application. 

● - What is the `dist` folder?

● - What is `browserlists`

It allows to configure our web app that what browser can 100% supports our webapp.

if we give it that our webapp supports last 2  chrome version.

then it means it 100% supports them and but other browser might be able to support or might not be able to.

Read about dif bundlers: 

vite, webpack, parcel

● Read about Script types in html (MDN Docs)

## Extra Questions:

- Why this version are like this 12.4.2 ?
12 -> is Major Version.
4 -> is Mini Version.
2 -> is patch.
- Tilde (~) vs Caret (^) in package.json: What’s the Difference?

<aside>
💡 Caret (^) s used to specify a “compatible with most recent” version range.
we’re saying that we want to use version 17.0.1 of the react package,
and we're willing to accept any version greater than or equal to 17.0.1
and less than 18.0.0. This allows us to receive patches, bug fixes,
and minor version changes, but not major version changes.
example:
        {
            "dependencies": {
                "react": "^17.0.1" this version can go like 17.1.1, or 17.3.1 etc.. but not 18.0.0
            }
        }

Tilde (~) is used to specify a “compatible with” version range.
we’re saying that we want to use version 17.0.1 of the react package,
and we're willing to accept any version greater than or equal to 17.0.1 and
less than 17.1.0. This allows us to receive patches and bug fixes,
but not minor or major version changes.
example:
        {
            "dependencies": {
                "react": "~17.0.1" this version can go like 17.0.2, or 17.0.3 etc.. but not 17.1.0
            }
        }

</aside>

- Why CDN links are not preferred to used?
    
    CDN link are not the preferred way to bring React and ReactDOM in our Project.
    because CDN has to make network call and then get the data. also when the version of the React or any other package will update in future over and over then we also has to keep changing the URL of our CDN.


# Talk is cheap, show me the code! - 04

## Assignment:

# Is JSX mandatory for React?

- No JSX is not mandatory we can write code without JSX. We only used JSX because it make writing the react in more readable and simpler way like we write HTML markup

# Is ES6 mandatory for React?

- No, we can write react without ES6, but writing React using ES6 makes things a lot easier and make code more readable.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- {TitleComponent}  is an valid JS expression. we can write the valid JS inside these  curlies. can even pass components
- <TitleComponent/> is an React component that is self closing JSX component
- <TitleComponent></TitleComponent> is also React JSX component but we also can pass children to it. all of thee are used according to the requirenment.

# How can I write comments in JSX?

- {/* This is how we write comments in JSX */}

# What is <React.Fragment></React.Fragment> and <></> ?

- <React.Fragment></React.Fragment> is used to wrap our react components while not adding an extra element to our DOM.
- <React.Fragment></React.Fragment> is the Legacy way or making react fragment
- <></>  is an shorter and newer way or making react fragment

# What is Virtual DOM?

- Virtual DOM is an Virtual Representation of an actual DOM. V-DOM is an object that stores all the information about elements like type of HTML element we want to create, What attributes it has etc..

# What is Reconciliation in React?

- The process of updating the DOM according to the current Virtual DOM  State.

# What is React Fiber?

- React Fiber is an new reconciler algorithm that deals with how react will update the changes made in the V-DOM.
- Here’s, how it is done.
- There are two phases in this part
- Phase - 1, **Reconciliation**:
    1. It first computes the list of changes made in the V-DOM, can also jump to other changes 
    2. Then it lists all the computed changed and schedules them into chunks.
- Phase - 2, **Commit:**
    1. From the scheduled changes react can choose to render the set of specific changes.
    2. Once changes are committed, React notifies the DOM to reflect the changes that were scheduled. 

# Why we need keys in React? When do we need keys in React?

- we need key for react lists because it helps react to identifies which React element is which.
- To avoid any errors lets assume the scenario where we created the list and it doesn’t has id

form the list we deleted an element.

- if we add new item to list then it can be added at any start or end or between any position.
- This can cause problem as like in when we are tryig to update any card then react will never know which list item actually need to be updated.
- Hence, it will re render the whole component instead of a single item. this cause Performence issue. 

# Can we use index as keys in React?

- Yes, we can. but it strictly not recommended not to used index as keys in React.

# What is props in React? Ways to

- props are the properties in react.
- we can directly give props inside these curly {}
- we can pass props from one component to other.

# What is a Config Driven UI ?

- Config Driven UI are the UIs Where UI is based of the data coming from the database or any api. etc.


# Let's get Hooked - 05

# Assignment:

# What is the difference between Named Export, Default export and * as export?

- **There can be only one default export in one file/component.**
- **There can be any number of named export in one file/component.**

# What is the importance of config.js file

- Our UI is driven this config.js file.

# What are React Hooks?

- React Hooks are the Normal JS functions that has special features. such as useState() hook.
- It allows React to know any the changes made in our react component. according to changes it re-render’s our UI.

# Why do we need a useState Hook?

- We need hooks because normal js identifies does not works as we expect them to work.
- thats why we need react hooks that provide more features.
