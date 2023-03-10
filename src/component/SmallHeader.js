import React from 'react';

function SmallHeader(){
    return (
        <div id="options">
            <hr/>
            <div>
                <a href="#about">01.<div className="heading">About</div></a>
            </div>
            <hr/>
            <div>
                <a href="#experience">02.<div className="heading">Experience</div></a>
            </div>
            <hr/>
            <div>
                <a href="#work">03.<div className="heading">Work</div></a>
            </div>
            <hr/>
            <div>
                <a href="#contact">04.<div className="heading">Contact</div></a>
            </div>
            <hr/>
            <div>
                <a href="https://drive.google.com/file/d/11d6wnY8BIxt65Ts1BqVpp5_vaEV7oS9q/view?usp=sharing">
                    <button className="button">
                        Resume
                    </button>
                </a>
            </div>
            <hr/>
        </div>
    );
}

export default SmallHeader;