import React from 'react';
import './Basic.css';
import Project from './Project';

function Projects(){
    const data = [
        {
            "title" : "ShopTurant",
            "about":"ShopTurant is an e-commerce application utilizing features like cart management, payment integration, user roles, product management, history tracking, address handling and order management.",
            "tools" : "ReactJS, Spring Boot, MySQL, HTML5, CSS3",
            "github":"https://github.com/skyamit/ShopTurant",
            "githubImg":"images/github.png",
            "liveLink":"https://www.youtube.com/watch?v=I6ZZtH6zbUU",
            "liveImg" :"images/link.png",
            "projectImg" : "images/shopturant.png"
        },
        {
            "title" : "Lilichatians",
            "about":"Built an end to end social networking application based on popular networking apps.",
            "tools" : "Java, Android Development, FireBase, Android Studio",
            "github":"https://github.com/skyamit/Lilichatians",
            "githubImg":"images/github.png",
            "liveLink":"https://play.google.com/store/apps/details?id=amit.example.lilichatians&gl=US&pli=1",
            "liveImg" :"images/link.png",
            "projectImg" : "images/Lilichatians.png"
        },
        {
            "title" : "Buy and Sell Books",
            "about":"Created a bookstore which allows users to Buy and Sell old books.",
            "tools" : "Spring Boot, Thymleaf, HTML5, CSS3, BootStrap, VS Code",
            "github":"https://github.com/skyamit/BuyAndSell",
            "githubImg":"images/github.png",
            "liveLink":"https://github.com/skyamit/BuyAndSell",
            "liveImg" :"images/link.png",
            "projectImg" : "images/BuyOldBooks.png"
        },
        {
            "title" : "SuperHero Hunter",
            "about":"Search and learn about all marvel Super Hero, Bookmark your favourites one.",
            "tools" : "HTML5, CSS3, JavaScript, APIs, BootStrap, VS Code",
            "github":"https://github.com/skyamit/superHero",
            "githubImg":"images/github.png",
            "liveLink":"https://superheroskyamit.netlify.app/",
            "liveImg" :"images/link.png",
            "projectImg" : "images/superhero.png"
        },
        {
            "title" : "Covid Tracker",
            "about":"Developed a web application which uses open source coronavirus data to track the new daily cases and shows the count of new cases region wise.",
            "tools" : "Spring Boot, GitHub API, HTML5, CSS3, BootStrap, VS Code",
            "github":"https://github.com/skyamit/covid-tracker",
            "githubImg":"images/github.png",
            "liveLink":"https://www.youtube.com/watch?v=38oMY2XjErY",
            "liveImg" :"images/link.png",
            "projectImg" : "images/CovidTracker.png"
        }
    ]
    return (
        <>
        <div className='projects row'>
            {
                data.map((curr) => {
                    return <Project data = {curr} />
                })
            }
        </div>
        
        <h3 className='white mt-5'>
            Practice Projects worth mentioning..
        </h3>
        <a href="https://lilichatians.netlify.app/">
            <button className='button mt-3 inline me-2'>Chat App</button>
        </a>
        <a href="https://musicfake.netlify.app/">
            <button className='button mt-3 inline me-2'>Music Player GUI</button>
        </a>
        <a href="https://contact-ninja.netlify.app/">
            <button className='button mt-3 inline me-2'>Contact App</button>
        </a>
        <a href="https://todoamit.netlify.app/">
            <button className='button mt-3 inline me-2'>ToDo</button>
        </a>
        <a href="https://pingpongskyamit.netlify.app/">
            <button className='button mt-3 inline me-2'>PingPong</button>
        </a>
        <a href="https://skyamitcalculator.netlify.app/">
            <button className='button mt-3 inline me-2'>Calculator</button>
        </a>
        </>
    );
}

export default Projects;