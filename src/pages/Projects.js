import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/Cards/ProjectCard';
import FullStackQuiz from '../assets/Images/fullStackQuiz.PNG';
import Suitcase from '../assets/Images/suitcase.PNG';
import TechBlog from '../assets/Images/TechBlog.PNG';
import Homepage from '../assets/Images/Homepage.JPG';
import WeatherCentral from '../assets/Images/weatherCentral.PNG';
import CLIEmployeeTracker from '../assets/Images/CLIEmployeeTracker.PNG';
import MERNGoogleBooks from '../assets/Images/GoogleBooks.JPG';
import StayRnb from '../assets/Images/StayRnb.JPG';


function Projects() {
  return (
    <>
      <Header heading="Projects (Click to toggle display)" />
      <ProjectCard
        name="Stay RnB"
        heading="Stay RnB"
        src={StayRnb}
        alt="Homepage for the StayRnB app"
        repo="https://github.com/Joeseff6/Stay-RnB-Backend"
        link="https://stay-rnb-server.herokuapp.com/"
        paragraph="Stay RnB is a crossover between the popular AirBnB app and your long term contract stays.
        It is intended for users who needs a room and board for longer than a week, but for a shorter period than an annual lease term.
        This full-stack MERN app features two separate login instances; Users can view and book boarding, while Hosts can post listings.
        We emphasize on a Host-User relationship, where a User will be able to contact Hosts and the Host will be associated to the User
        upon booking the boarding."
      />
      <ProjectCard
        name="MERN Google Books"
        heading="MERN Google Books"
        src={MERNGoogleBooks}
        alt="Homepage for the MERN Google Books app"
        repo="https://github.com/Joeseff6/MERN-Google-Books"
        link="https://whispering-springs-93162.herokuapp.com/"
        paragraph="Google has many APIs that are very commonly used in every day life. In fact, we use a lot of these APIs just through google.com! 
        When we send a search query on google.com, we are utilizing a Google API at that moment. 
        The links such as Shopping, Images, and even Books, utilize an individual API! 
        So for this application, I am essentially using the technology from the 'Books' link to allow a user to search for any book by title, and give them the ability to save that book (or item) to a saved page for later retrieval. 
        Since these saved books are stored through MongoDB Atlas, the user can always come back to the page, sign up or sign in, and retrieve their list at any time!"
      />
      <ProjectCard
        name="Song N' Seek"
        heading="Song N' Seek"
        src={Homepage}
        alt="Homepage for the Song N' Seek app"
        repo="https://github.com/Joeseff6/SongNSeek"
        link="https://song-n-seek.herokuapp.com/"
        paragraph="Song N' Seek is the perfect example of user interaction on the client-side to communicate with server-side applications.
        Originally meant to be a streaming app like Spotify or Apple Music, this application works as a development project towards something
        as great as the aforementioned. Users will create a new account by submitting information such as a username, email, and encrypted 
        password."
      />
      <ProjectCard
        name="SuitCase"
        heading="Suitcase"
        src={Suitcase}
        alt="The homepage of my Suitcase App"
        repo="https://github.com/Joeseff6/Suitcase"
        link="https://joeseff6.github.io/Suitcase/"
        paragraph="The Suitcase application allows the user to search by city, and is then greeted with a list of cities in other countries. 
          Upon selection, the user will be able to choose which set of data they would like to see (General stats, the current weather or weather forecast, 
          a map of the city, and the news). Other features include a persisting history and favorites button, where data is stored for easy retrieval 
          even upon page refresh. Suitcase features Third-party APIs such as Modern.js, Foundation, Google fonts, and jQuery. We also
          utilized Server-side APIs such as GeoDb, REST Countries, OpenWeather, Open Layer in this project."
      />
      <ProjectCard
        name="Tech Blog"
        heading="Tech Blog"
        src={TechBlog}
        alt="The homepage of my Tech Blog App"
        repo="https://github.com/Joeseff6/BloggersBlog"
        link="https://bloggers-blog123.herokuapp.com/"
        paragraph="The Tech Talk application is an actual webpage that allows users to create a new account or log in to an existing account.
        Information provided by the user is stored in MySQL for database relations, which also features encrypted passwords! Upon login 
        or signup, the user will be taken to a dashboard where they will see all available posts left by other users. Each post can be viewed 
        individually, and the comments related to the post will also be displayed in future developments; currently a user can post a comment, 
        but it will not be shown."
      />
      <ProjectCard
        name="Full Stack Quiz"
        heading="Full Stack Quiz"
        src={FullStackQuiz}
        alt="The homepage of my Full Stack Quiz App"
        repo="https://github.com/Joeseff6/FullStackCodingQuiz"
        link="https://joeseff6.github.io/FullStackCodingQuiz/"
        paragraph="A quiz will be given as a mini-game to the user, which will provide a series of questions relating to HTML, CSS, and Javascript. 
        Each set of answers will have a question, that when an answer is clicked, will dynamically change to show the next set of questions. 
        Once the game is over (either by answering all questions, or the timer runs out), the user will be taken to a highscore table in another web page. 
        The user can then enter their initials and hit enter to save their score. They can also go back and play again after submitting initials."
      />
      <ProjectCard
        name="Weather Central"
        heading="Weather Central"
        src={WeatherCentral}
        alt="The homepage of my Weather Central App"
        repo="https://github.com/Joeseff6/WeatherCentral"
        link="https://joeseff6.github.io/WeatherCentral/"
        paragraph="The user can go into this web application and pull up the weather for a specified city. Say, for example, the user wants to see the estimated weather in Houston, Texas for the next 5 days. 
        They can search by either the city name or the city,state and pull up the 5-day forecast at that time and even view the current weather. 
        This application utilizes the server-side OpenWeather API to retrieve data about the destination's weather, and will dynamically populate the webpage. 
        Some features include a list of the user's previous search history, with the ability to click on search list items, and data persistence of the last searched city."
      />
      <ProjectCard
        name="CLI Employee Tracker"
        heading="CLI Employee Tracker"
        src={CLIEmployeeTracker}
        alt="The main menu of my CLI app Employee Tracker"
        repo="https://github.com/Joeseff6/CLIEmployeeTracker"
        link="https://drive.google.com/file/d/1ZKUnaO6HZ4JN5tiaHReqyVNv5ww5mktP/view?usp=sharing"
        paragraph="The user will be able to use this application to manage their employee's information, such as their name, ID, salary, title, and more! 
        This information will be stored in a database as the user operates the app. 
        Not only will the user write to the database, but they can also read and view the data entered.
        This project is useful for companies across industries because data is always being handled and needing to be stored or modified.
        Using the CLIEmployeeTracker will allow the user to maintain this data in a neat and reliable fashion."
      />
    </>
  )
}

export default Projects;