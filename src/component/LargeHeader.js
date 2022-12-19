import React from 'react';

function LargeHeader(){
    return (
        <>
        <div id="_align_right">
            <ul className="nav pull-right align-items-center">
                <li className="nav-item pe-4">
                    <a href="#about">01.<div className="heading">About</div></a>
                </li>
                <li className="nav-item pe-4">
                    <a href="#experience">02.<div className="heading">Experience</div></a>
                </li>
                <li className="nav-item pe-4">
                    <a href="#work">03.<div className="heading">Work</div></a>
                </li>
                <li className="nav-item pe-4">
                    <a href="#contact">04.<div className="heading">Contact</div></a>
                </li>
                <li className='nav-item'>
                    <button className='button'>
                        <a href="https://drive.google.com/file/d/11d6wnY8BIxt65Ts1BqVpp5_vaEV7oS9q/view?usp=sharing">Resume</a>
                    </button>
                </li>
            </ul>
        </div>
        </>
    );
}

export default LargeHeader;