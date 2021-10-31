import StayRnb from "../../assets/images/StayRnb.JPG";
import Suitcase from "../../assets/images/suitcase.JPG";
import WeatherCentral from "../../assets/images/weatherCentral.JPG";
import SongNSeek from "../../assets/images/SongNSeek.JPG";
import TechBlog from "../../assets/images/TechBlog.JPG";
import FullStackQuiz from "../../assets/images/fullStackQuiz.JPG";
import GoogleBooks from "../../assets/images/GoogleBooks.JPG";
import EmployeeTracker from "../../assets/images/EmployeeTracker.JPG";

const projects = [
  {
    id: 0,
    image: StayRnb,
    alt: `A screenshot of the homepage for my Stay R n b app.`,
    title: `Stay RnB`,
    description: `Application for booking room and boarding when you don't need a full apartment or house for rent. 
    When you are looking for the minimum place to stay and sleep without the hassle of paying for full apartments 
    or houses, we are here to solve your problem. This application will connect the user with property owners 
    that will host their available rooms for boarding. Property owners who have spare bedrooms they want 
    to share out can come sign up to get with users who might need a room for boarding that are looking in the area.`,
    repoLink: `https://github.com/Joeseff6/Stay-RnB-Backend`,
    deployedLink: `https://stay-rnb-server.herokuapp.com/`,
    skills: `MERN Stack, Restful API, Bootstrap`,
  },
  {
    id: 1,
    image: SongNSeek,
    alt: `A screenshot of the homepage for my Song N Seek app.`,
    title: `Song N' Seek`,
    description: `The purpose of this project is to create an application that allows the user to search for songs 
    by artist, song name, or album. This is done using a front-end user interface and back-end logic. 
    Through the interaction of the front end, a user will be accessing a database to store their 
    encrypted login information, as well as perform Create, Read, Update, and Delete methods for the database.`,
    repoLink: `https://github.com/Joeseff6/SongNSeek`,
    deployedLink: `https://song-n-seek.herokuapp.com/`,
    skills: `SQL, Model-View-Controller, Handlebars.js, RESTful API`,
  },
  {
    id: 2,
    image: Suitcase,
    alt: `A screenshot of the homepage for my Suitcase app.`,
    title: `Suitcase`,
    description: `Say that you are going to travel to another country, whether it be for work or for leisure, 
    but you don't know much about the destination you're traveling to. What is the language spoken there? 
    What is the currency? What is the capital of that country? Is the country under lockdown due to a pandemic? 
    That's where this application comes in handy! The user will be able to use this deployed web application to 
    search for a destination and learn high-leveled details about said destination.`,
    repoLink: `https://github.com/Joeseff6/Suitcase`,
    deployedLink: `https://joeseff6.github.io/Suitcase/`,
    skills: `JQuery, Bootstrap, Third-Party API`
  },
  {
    id: 3,
    image: TechBlog,
    alt: `A screenshot of the posts page for my Tech Blog app.`,
    title: `Tech Blog`,
    description: `The purpose of this project is to build a blog-site web application that uses both front 
    and back-end logic, ORM, databasing, and front-end development. This application is truly a 
    full-stack application as it incorporates client side interaction to perform http requests such 
    that data is retrieved/written into a database. MVC (Model-View-Controller) is the paradigm that was 
    used to make this project as evident in the file structure.`,
    repoLink: `https://github.com/Joeseff6/BloggersBlog`,
    deployedLink: `https://bloggers-blog123.herokuapp.com/`,
    skills: `SQL, Model-View-Controller, Handlebars.js, RESTful API`,
  },
  {
    id: 4,
    image: GoogleBooks,
    alt: `A screenshot of the posts page for my Tech Blog app.`,
    title: `Google Books`,
    description: `The purpose of this project is to create a full stack MERN (Mongo-Express-React-Node) 
    application that will allow a user to send server requests through interaction with React components. 
    I used the axios npm package to perform request methods like GET, POST, and DELETE. The server is 
    set up using Express.js, and the database used is MongoDB, hence the MERN acronym! Users will be able 
    to make their own (encrypted) login, search for books by sending a GET request to the Google Books 
    API and returning response data, and save (or delete) books to a database using a one:many relationship.`,
    repoLink: `https://github.com/Joeseff6/MERN-Google-Books`,
    deployedLink: `https://whispering-springs-93162.herokuapp.com/`,
    skills: `MERN Stack, Restful API, Bootstrap`,
  },
  {
    id: 5,
    image: WeatherCentral,
    alt: `A screenshot of the posts page for my Tech Blog app.`,
    title: `Weather Central`,
    description: `The user can go into this web application and pull up the weather for a specified city. 
    Say, for example, the user wants to see the estimated weather in Houston, Texas for the next 5 days. 
    They can search by either the city name or the city,state and pull up the 5-day forecast at that time and even 
    view the current weather. This application utilizes the server-side OpenWeather API to retrieve data about the 
    destination's weather, and will dynamically populate the webpage.`,
    repoLink: `https://github.com/Joeseff6/WeatherCentral`,
    deployedLink: `https://joeseff6.github.io/WeatherCentral/`,
    skills: `JQuery, Bootstrap, Third-Party API, Local Storage`
  },
  {
    id: 6,
    image: EmployeeTracker,
    alt: `A screenshot of the command prompt where the employee tracker is ran.`,
    title: `CLI Employee Tracker`,
    description: `The purpose of this application is to use Node.js to connect to a MySQL Workbench server so that a user can store 
    and read data from a database. Javascript (and some SQL) will be used to communicate between Node.js and MySQL by using 
    the mysql2 module. This differs from my past projects due to the fact that the information isn't 
    stored locally (using localstorage in Javascript).`,
    repoLink: `https://github.com/Joeseff6/CLIEmployeeTracker`,
    skills: `Command Line Interface, Inquirer, OOP, Classes`
  },
  {
    id: 7,
    image: FullStackQuiz,
    alt: `A screenshot of the posts page for my Tech Blog app.`,
    title: `Full Stack Quiz`,
    description: `A quiz will be given as a mini-game to the user, which will provide a series of questions relating to HTML, 
    CSS, and Javascript. Each set of answers will have a question, that when an answer is clicked, will dynamically change to 
    show the next set of questions. Once the game is over (either by answering all questions, or the timer runs out), the user will be 
    taken to a highscore table in another web page. The user can then enter their initials and hit enter to save their score. 
    They can also go back and play again after submitting initials.`,
    repoLink: `https://github.com/Joeseff6/FullStackCodingQuiz`,
    deployedLink: `https://joeseff6.github.io/FullStackCodingQuiz/`,
    skills: `HTML5, CSS3, Javascript, Local Storage`
  },
];

export { projects };
