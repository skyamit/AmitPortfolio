import React from 'react';
import './Basic.css';

function Projects(){
    return (
        <div className='d-flex flex-column '>
            <div className='project'>
                <div className='project-details'>
                    <div className='project-info'>
                        <h3 className='text monospace white'><b>Lilichatians</b></h3>
                        <p className='grey text'>
                        Built an end to end social networking application based on popular networking apps.
                        </p>

                        <h6 className='white'>Java, Android Development, FireBase, Android Studio</h6>

                        <a href="https://github.com/skyamit/Lilichatians">
                            <img src="images/github.png" alt="github"/>
                        </a>
                        <a className="ps-3" href="https://play.google.com/store/apps/details?id=amit.example.lilichatians&gl=US&pli=1">
                            <img className="icon" src="images/link.png" alt="link"/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <img className="img-fluid" src='images/Lilichatians.png' alt='lilichatians' />
                </div>
            </div>
            <div className='project'>
                <div className='project-details'>
                    <div className='project-info'>
                        <h3 className='text monospace white'><b>Buy and Sell Books</b></h3>
                        <p className='grey text'>Created a bookstore which allows users to Buy and Sell old books.</p>

                        <h6 className='white'>Spring Boot, Thymleaf, HTML5, CSS3, BootStrap, VS Code</h6>
                        <a href="https://github.com/skyamit/BuyAndSell">
                            <img src="images/github.png" alt="github"/>
                        </a>
                        <a className="ps-3" href="https://github.com/skyamit/BuyAndSell">
                            <img className="icon" src="images/link.png" alt="link"/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <img className="img-fluid" src='images/BuyOldBooks.png' alt='Buy Old Books' />
                </div>
            </div>
            <div className='project'>
                <div className='project-details'>
                    <div className='project-info'>
                        <h3 className='text monospace white'><b>Covid Tracker</b></h3>
                        <p className='grey text'>Developed a web application which uses open source coronavirus data to track the new daily cases and shows the count of new cases region wise.</p>

                        <h6 className='white'>Spring Boot, GitHub API, HTML5, CSS3, BootStrap, VS Code</h6>
                        <a href="https://github.com/skyamit/covid-tracker">
                            <img src="images/github.png" alt="github"/>
                        </a>
                        <a className="ps-3" href="https://www.youtube.com/watch?v=38oMY2XjErY">
                            <img className="icon" src="images/link.png" alt="link"/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <img className="img-fluid" src='images/CovidTracker.png' alt='Coid Cases' />
                </div>
            </div>
            <div className='project'>
                <div className='project-details'>
                    <div className='project-info'>
                        <h3 className='text monospace white'><b>Music Player</b></h3>
                        <p className='grey text '>MusicPlayer is front end project to show my HTML, CSS, BootStrap Skills.</p>

                        <h6 className='white'>HTML5, CSS3, BootStrap, VS Code</h6>
                        <a href="https://github.com/skyamit/MusicPlayer">
                            <img src="images/github.png" alt="github"/>
                        </a>
                        <a className="ps-3" href="https://musicfake.netlify.app/">
                            <img className="icon" src="images/link.png" alt="link"/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <img className="img-fluid" src='images/MusicPlayer.png' alt='music player' />
                </div>
            </div>
        </div>
    );
}

export default Projects;