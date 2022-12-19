import React, { useState } from 'react';
import './Basic.css';

function Work() {

    const [value, setValue] = useState(1);

    const sync = ()=>{
        setValue(1);
    };    
    const cog = ()=>{
        setValue(0);
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
                    <h6 className='text white'>Software Developer <b className='text-pop text monospace'>@ Synchronoss</b></h6>
                    <p className='text grey monospace small'>July 2022 - December 2022</p>

                    <ul>
                        <li className='text grey monospace'>OnBoarded multiple functionalities from existing application to new Tech Stack.</li>
                        <li className='text grey monospace'>Wrote multiple API's for the team which returned the extracted data by doing some computations on the basis of business requirements. These API's made the system more feature rich.</li>
                        <li className='text grey monospace'>Created an internal tool to check the data of over 230 fields for 140K records to create reconciliation report.</li>
                        <li className='text grey monospace'>Tech Stack : Java, Spring Boot, Rest API, React.JS</li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className='row'>
            <div align="left" className='mt-4 d-md-flex flex-column  col-12 col-xl-3 col-md-4 col-sm-12'>
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