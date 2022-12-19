import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./component/Basic.css";
import About from './component/About';
import Header from './component/Header';
import Work from './component/Work';
import Projects from './component/Projects';

function App() {
  
  return (
    <div className='container-fluid'>
      <Header/>
      <div className=''>
        <main className='body-color p-4'>
          <div className='row justify-content-center'>
            <div className='col-12 col-xl-8 col-lg-9 col-md-9 col-sm-12 pt-5 pb-5'id="#brief" >
              <p className="text-pop">
                Hi, my name is
              </p>
              <h2 className="white large">
                Amit Kumar.
              </h2>
              <h3 className="grey medium">
                I build things for the web.
              </h3>
              <p className='pt-3 col-12 col-lg-8 col-md-9 col-sm-12'>
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products and looking for Job.
              </p>
              <h2 className='white mt-5'>
                My Coding Profiles
              </h2>
              <button className='button mt-3 inline me-2'>
                LinkedIn
              </button>
              <button className='button mt-3 inline me-2'>
                Github
              </button>
              <button className='button mt-3 inline me-2'>
                Leetcode
              </button>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div id="about" className='col-12 col-xl-8 col-lg-9 col-md-9 col-sm-12 pt-5 pb-5 mt-5 mb-5 pt-5 pb-5' >
              <h1 className="text-pop inline">
                01.<div className="heading">About Me</div>
              </h1>
              <About/>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div id="experience" className='col-12 col-xl-6 col-lg-8 col-md-9 mt-5 mb-5 pt-5 pb-5' >
              <h1 className="text-pop inline">
                02.<div className="heading">Where I've Worked</div>
              </h1>
              <Work/>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div id="work" className='col-12 col-xl-6 col-lg-8 col-md-9 mt-5 mb-5 pt-5 pb-5' >
              <h1 className="text-pop">
                03.<div className="heading">Some Things I've Built</div>
              </h1>
              <Projects/>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div id="contact" className='col-12 col-xl-6 col-md-8 col-sm-12 mt-5 mb-5 pt-5 pb-5' align="center">
              <br/><br/>
              <h1 className="text-pop">
                04.<div className="heading">What's Next</div>
              </h1>
              <h2 className='white text'>
                Get In Touch
              </h2>
              <p className='grey p-2'>
              I'm looking for new Opportunity, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <br/><br/>

              <a href="mailto:amit7646014@gmail.com?subject=Hello" className='button'>Say Hello</a>
              
              <br/><br/>
            </div>
            </div>
        </main>
        
        <br/><br/>
        <br/><br/>
        <footer align="center" className='row footer-color'>
          <p className='white monospace'>Built by Amit Kumar</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
