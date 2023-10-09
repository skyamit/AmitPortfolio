import React, { useState } from 'react';
import './Basic.css';

function Work() {

    const [value, setValue] = useState(2);

    const sync = ()=>{
        setValue(1);
    };    
    const cog = ()=>{
        setValue(0);
    };
    const gyan = ()=>{
        setValue(2);
    };
    function SelectWork(){
        if(value === 0){
            return (
                <div>
                    <h6 className='text white'>Programmer Analyst <b className='text-pop text monospace'>@ Cognizant</b></h6>
                    <p className='text grey monospace small'>January 2021 - June 2022</p>

                    <ul>
                        <li className='text grey monospace'>Added 2 features in the existing websites to view and edit all the statistics of user at one place which reduced the manual work by 50%.</li>
                        <li className='text grey monospace'>Implemented 3 backend modules which transfered the data into new systems and creates error report.</li>
                        <li className='text grey monospace'>Created an internal tool to check the data of over 230 fields for 140K records to create reconciliation report.</li>
                        <li className='text grey monospace'>Tech Stack : Java, Spring Boot, Rest API, HTML, CSS, MySQL</li>
                    </ul>
                </div>
            );
        }
        else if(value === 1){
            return (
                <div>
                    <h6 className='text white'>Software Developer <b className='text-pop text monospace'>@ IQMetrix / Synchronoss Technologies</b></h6>
                    <p className='text grey monospace small'>July 2022 - December 2022</p>

                    <ul>
                        <li className='text grey monospace'>OnBoarded multiple functionalities from existing application to new Tech Stack.</li>
                        <li className='text grey monospace'>Wrote multiple API's for the team which returned the extracted data by doing some computations on the basis of business requirements. These API's made the system more feature rich.</li>
                        <li className='text grey monospace'>Tech Stack : Java, Spring Boot, Rest API, MySQL, React.JS</li>
                    </ul>
                </div>
            );
        }
        else if(value === 2) {
            return (
                <div>
                    <h6 className='text white'>Software Engineer <b className='text-pop text monospace'>@ Intelligent Machine Labs / PearlShell Softech</b></h6>
                    <p className='text grey monospace small'>January 2023 - current</p>

                    <ul>
                        <li className='text grey monospace'>Created API's to upload file, create templates, and to backtrack data & return relevant records.</li>
                        <li className='text grey monospace'>Worked on multiple existing features and changed the behaviour based on business requirements.</li>
                        <li className='text grey monospace'>Created a API which converts objects to MS Document which contains links, styled texts, lists, tables etc.</li>
                        <li className='text grey monospace'>Optimized the initate research time by 30%, by reducing the number of API's call.</li>
                        <li className='text grey monospace'>Implemented a API to share Large Gyans and keep track of its status.</li>
                        <li className='text grey monospace'>Tech Stack : Java, Spring Boot, Rest API, MySQL</li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className='row'>
            <div align="left" className='mt-4 d-md-flex flex-column  col-12 col-xl-3 col-md-4 col-sm-12'>
                <div id="btn1" className={value===2?"hover-color btn-work left-button grey monospace":"btn-work left-button grey monospace"} onClick={gyan}><span className={value===2?"text-pop":""}>GyanAI</span></div>
                <div id="btn1" className={value===1?"hover-color btn-work left-button grey monospace":"btn-work left-button grey monospace"} onClick={sync}><span className={value===1?"text-pop":""}>Synchronoss</span></div>
                <div id="btn0" className={value===0?"hover-color btn-work left-button grey monospace":"btn-work left-button grey monospace"} onClick={cog}><span className={value===0?"text-pop":""}>Cognizant</span></div>
            </div>
            <div className='mt-4 d-md-block col-12 col-xl-9 col-md-8 col-sm-12'>
                <SelectWork/>
            </div>
        </div>
    );
}

export default Work;