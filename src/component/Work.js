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
                        <li className='text grey monospace'>
                        Streamlined user statistics management by building backend-driven workflows and APIs, reducing manual operational effort by approximately 70%.
                        </li>

                        <li className='text grey monospace'>
                        Designed and implemented scalable backend architecture for three core modules to migrate legacy data into new systems, with automated error reporting for reliable data transfer.
                        </li>

                        <li className='text grey monospace'>
                        Built an internal data validation tool to validate 230+ fields across 140K+ records, automate reconciliation reporting, and improve data accuracy during migration.
                        </li>

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
                        <li className='text grey monospace'>
                        Built and maintained backend APIs for data computation and aggregation using complex business logic, enabling new product features and improved data availability.
                        </li>

                        <li className='text grey monospace'>
                        Identified performance bottlenecks and refactored critical code paths, reducing page load time by 20% and improving application responsiveness.
                        </li>

                        <li className='text grey monospace'>Tech Stack : Java, Spring Boot, Rest API, MySQL</li>
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
                        <li className='text grey monospace'>
                        Partnered with product teams to refine requirements and deliver user-centric features aligned with business goals.
                        </li>

                        <li className='text grey monospace'>
                        Successfully developed features such as sentiment analysis, comments, and drafts, improving overall product quality and user experience.
                        </li>

                        <li className='text grey monospace'>
                        Reduced indexing time from 3 minutes to 7 seconds by implementing multi-threaded processing using Java Executor Service and integrating Apache SOLR.
                        </li>

                        <li className='text grey monospace'>
                        Built interactive knowledge graphs across articles, topics, and concepts, enabling faster content discovery through graph-based navigation.
                        </li>

                        <li className='text grey monospace'>
                        Enhanced Refresh and Consolidate features to support large knowledge repositories, ensuring seamless updates and data consolidation.
                        </li>

                        <li className='text grey monospace'>
                        Reduced manual onboarding effort by 99% by designing scalable workflows for user groups, access control, and repository permissions.
                        </li>

                        <li className='text grey monospace'>
                        Designed and implemented a configuration-driven document extraction pipeline using Adobe and Aspose APIs to convert raw documents into structured content.
                        </li>

                        <li className='text grey monospace'>
                        Built rule-based normalization services to correct document hierarchy and transform JSON payloads into client-specific XML formats.
                        </li>

                        <li className='text grey monospace'>
                        Developed APIs for file uploads, template creation, data backtracking, and returning relevant records.
                        </li>

                        <li className='text grey monospace'>
                        Created an API to generate MS Word documents containing links, styled text, lists, and tables.
                        </li>

                        <li className='text grey monospace'>
                        Implemented APIs to share large Gyans and track their processing and delivery status.
                        </li>

                        <li className='text grey monospace'>
                        Optimized research initiation time by 30% by reducing redundant API calls and improving request orchestration.
                        </li>

                        <li className='text grey monospace'>
                        Designed and developed modules for Excel file generation, integrating seamlessly with microservices to improve data extraction efficiency.
                        </li>

                        <li className='text grey monospace'>
                        Improved system stability by 25% by resolving 50+ production issues across UI, article processing, visibility, and API layers.
                        </li>

                        <li className='text grey monospace'>
                        Proactively proposed and influenced feature enhancements, contributing to the product roadmap and improving user engagement.
                        </li>

                        <li className='text grey monospace'>
                        Tech Stack: Java, Spring Boot, REST APIs, MySQL
                        </li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className='row'>
            <div align="left" className='mt-4 d-md-flex flex-column  col-12 col-xl-3 col-md-4 col-sm-12'>
                <div id="btn1" className={value===2?"hover-color btn-work left-button grey monospace":"btn-work left-button grey monospace"} onClick={gyan}><span className={value===2?"text-pop":""}>Intelligent Machine Labs</span></div>
                <div id="btn1" className={value===1?"hover-color btn-work left-button grey monospace":"btn-work left-button grey monospace"} onClick={sync}><span className={value===1?"text-pop":""}>IQMetrix</span></div>
                <div id="btn0" className={value===0?"hover-color btn-work left-button grey monospace":"btn-work left-button grey monospace"} onClick={cog}><span className={value===0?"text-pop":""}>Cognizant</span></div>
            </div>
            <div className='mt-4 d-md-block col-12 col-xl-9 col-md-8 col-sm-12'>
                <SelectWork/>
            </div>
        </div>
    );
}

export default Work;