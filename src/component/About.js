import React from 'react';

function About(){
    return (
        <div className='row'>
            <div className='col-12 col-lg-6 col-md-12'>
                <p>
                    Hello! My name is Amit Kumar and I enjoy creating things that live on the internet. My interest in Computer Science started back in 2015 when I decided to try Web Developement which increased my interest that leads me to Computer Science and Engineering Degree.
                </p>
                <p>
                    Fast-forward to today, and I’ve had the privilege of working at a huge corporation, and a Product based company.
                </p>
                <p>
                    Currently aiming to contribute my knowledge and skills to the origanization and enchance my experience through continuous learning and teamwork.
                </p>
                <h6 className="white text">
                    Here are a few technologies I’ve been working with recently:
                </h6>
                <div className='d-flex col-12 col-xl-12 col-lg-12 col-md-8 col-sm-8 justify-content-between'>
                    <div>
                        <ul>
                            <li className='text-pop'>Java</li>
                            <li className='text-pop'>Spring Boot</li>
                            <li className='text-pop'>RestAPI</li>
                            <li className='text-pop'>MySQL</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='text-pop'>JavaScript</li>
                            <li className='text-pop'>React.JS</li>
                            <li className='text-pop'>HTML/CSS/Bootstrap</li>
                            <li className='text-pop'>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center col-12 col-lg-6 col-md-12">
                <div id="container" >
                    <div id="profile-div"></div>
                    <div>
                        <img id="profile" src="images/Amit.jpeg" alt="profile"/>
                    </div>
                    <div id="pborder">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;