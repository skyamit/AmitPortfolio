import './Project.css';

function Project(props) {
    return (
        <div className='col-12 col-xl-6 col-lg-6 col-md-12'>
            <div className="project" >
                <div className='project-details'>
                    <div className='project-info'>
                        <h3 className='text monospace white'><b>{props.data.title}</b></h3>
                        <p className='grey text '>{props.data.about}</p>

                        <h6 className='white'>{props.data.tools}</h6>
                        <a href={props.data.github}>
                            <img src={props.data.githubImg} alt="github"/>
                        </a>
                        <a className="ps-3" href={props.data.liveLink}>
                            <img className="icon" src={props.data.liveImg} alt="link"/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <img className="img-fluid" src={props.data.projectImg} alt='calculator' />
                </div>
            </div>

        </div>
    );
}


export default Project;