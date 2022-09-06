import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <section className='introSection'>
        <div className='navBar'>
          <div className='leftContainer'>
            <div className='logo'></div>
            <div className='statusBar'>Hyggelig å treffe deg! :)</div>
          </div>
          <div className='rightContainer'>
            <div className='biggerProjects'>
              <p>Større prosjekter</p>
              <div className='arriveSoon'>Kommer!</div>
            </div>
            <div className='contactBut'>
              <p>Kontakt</p>
              <div className="contactLine"></div>
            </div>
            <div className='languageSwitcher'>
              <p>NO</p>
              <div className='downArrow'></div>
            </div>
          </div>
        </div>
        <div className='introBanner'>
          <div className='introContainer'>
            <div className="introText">
              <p>Design</p>
              <p>Web- og apputvikling</p>
              <p>Brandutvikling</p>
            </div>
            <div className="introAboutMe">
              <div className="aboutMeContainer">
                <p>Jeg er 26 år, og er en designer og utvikler 
                  basert i Bergen. Min største interesse er å 
                  lage løsninger som konverterer og gir <span className="bold">verdi </span> 
                  for din vikrsomhet.
                </p>
                <div className="profilePicture"></div>
                <div className="spinningFocus">
                  <div className="spinningText"></div>
                  <div className="blackCircle"></div>
                </div>
              </div>
              
            </div>
            <div className="garanti"></div>
            <div className='nextButton'>
              <div className="nextArrow"></div>
            </div>
          </div>
        </div>
      </section>


      <section className="slideshowSection">
        <div className="slideshowView">
          <div className="slideshowHeader">
            <div className="logo"></div>
            <div className="slideshowContact">
              <p>Kontakt</p>
              <div className="contactLine"></div>
            </div>
          </div>
          <div className="slideshowContent">
            <p>Skap<br/>engasjement.</p>
            <p>tester</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
