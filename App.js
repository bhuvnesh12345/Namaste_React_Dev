// initially we make our folder as namaste react
// add a file named as index.html
// then add some html code

// after that we create html element using javascript and then give some content inside it using innerHTML method and then append this child inside our div tag



// so  add the react cdn into our index.html file we add two links first is react and second for react-dom but these two links for development purpose on our machine and there is also production link for making production ready application using react
// so react is a library which means we need very less efforts in order to add react into our application 
// and react is core library and react-dom is also part of it which interact with  dom(document object model) of browser
// now after adding the cdn(cdn is the fastest way to fetch the data) go to console of browser here if we type React and ReactDOM then we will have information about them and this power we get through cdn
//same as if we type Window in console of browser and this window we got through js Engine. 



// Now create element using React
//React.createElement(first_param->tag name, secondparam->object of properties or attributes(in react language we called it props),thirdparam-> content inside the tag or element)
// here create element is the api which used to create react element.
//but this approach to create element is to complex so thai is why Meta developer develop JSX
// JSX - (mostly prople called is javascript xml but this is not his official name)
// it is like html means its structure is like html but it is not html
// it is used to create react element 


// till now we have only three files in our app
// 1- index.html, app.js, index.css
// but this is not production ready code or app
// for production ready app our should
//    1- files should be minified
//    2- optimise our app
//    3- removes all console.log
//    4- bundling the files
//    5- and many more functionalities are reqyired
//    6- should have server for running our app on local machine
// so for this we nedd WEB BUNDLERS(basically these are packages)
// web bundlers provide are fucntionalities for production ready app
// now we need any bundlers like vite, parcel, webpack because they provide many fuctionalities in order to run our application (in short they beast have allot superpowers).
// when we do create react app this time webpack act as bundlers in our app.
// so these bundlers are packages and we need package manager npm who can manages these all packages.


//Meanwhile
// we also add .gitignore file which will help us which code should not be commited to git
// simply inside our project open the terminal
// type echo ""> .gitignore
// hit enter it will add the gitignore file into ur project this is indiect way
// direct way is the go to project folder add the .giignore file 



// npm -- it does not any official full forms but firstly it is used for node.js that is why generally called it Node Package Manager
// so npm is package manager which will manage our package like parcel
// run command npm init it will download the package.json file into our folder where this file have basic information of the project 
//like entry point (from where our application will start), testing framework, author name, version of npm
//it is json file where data stored in the form of javascript object




// now download the parcel by command npm install -d parcel (and also put i in place of install )
// here -d shows that it is downloaded as a dev dependencies( means in our development machines not for production ready)
// so when we run this command npm install -d parcel
// it add two things inside our project folder
// 1- is package-lock.json - it consist all dependencies which is required for run our app 
// these dependecies are downloaded inside node modules folder



// some superpowers of parcel are
// 1- it minified our code
// 2- Image optimization -- images or audio or video take more time or data in any application so parcel optimizes our images
// 3- provide server -- it provide a server on local host where our application can run easily
// 4- HRM (Hot Replacement Module) --
// 5- File Watcher Algorithm ( it is written in C++) --
// 6- Port Number -- when we make two ract application simulataneoulsy we run both of them then different port number will provide to both of them where they can host independently 
// 7- Transitive dependecies - means one dependecy depends upon other other dependecies
//




//NowIgnite Our App
// means we run our app

const heading1=React.createElement("h1",{id:"h1"},"Namaste React");
/*const heading1=React.createElement(
   "h1",
   {
       id:"h1",
   },
   "Namaste React1"
   );*/

const heading2=React.createElement(
   "h1",
   {
       id:"h2"
   },
   "Namaste React2"
);

const div1=React.createElement(
   "div",
   {
       id : "div"
   },
   [heading1,heading2]
);

//
const g=React.createElement(
    "p",
    {
        id:"para",
        smart: "hello"
    },
    "bhuvnesh"
)

//this is how we get the div with id root
//here we render our all data inside this div tag whose id is root.
const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(div1);