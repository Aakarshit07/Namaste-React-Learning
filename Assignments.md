# Inception - 01:
# Assignment: 
Theory -
● What is Emmet?

> ***“Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow:”***
> 

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

React responsive for the React code functionality

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

Script Loading has 2 parts **Fetching an script** from the network ****and  **Executing an Script line by line**

- How All these happens
- When we just using website which doesn’t use Async or Defer.
    
    **HTML Parsing** happens and When it encounters the script tag it stops the parsing of HTML and it start to **Fetch Script**  then **Executes script** after that it continues to parse the HTML.
    
- When website use Async.
- When to use async ?
- Mostly used when the scripts are not dependent on each other.
    
    **HTML Parsing** happens and **parallelly** **Fetch Script**  when it done fetching it ****script. it stops the parsing of HTML. It start to **Executes script** after that it continues to parse the HTML.
    
- When website use Defer.
- When to use defer ?
- Can be used when the scripts are even dependent on each other.
    
    **HTML Parsing** happens and **parallelly** **Fetch Script**  when it done **HTML parsing**. It start to **Executes script.**
