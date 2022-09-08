import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const options = {
  scale: 1.001,
  speed: 100,
  max: 1,
  reverse: true,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const optionsSmallTilt = {
  scale: 1.01,
  speed: 500,
  max: 1,
  reverse: true
}

const optionsMediumTilt = {
  scale: 1.01,
  speed: 10000,
  max: 1,
  reverse: false,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <section className='introSection'>
        <div className='navBar'>
          <div className='leftContainer'>
            <Tilt options={optionsSmallTilt} className='logo'></Tilt>
            <Tilt className='statusBar' options={options}>Hyggelig å treffe deg! :)</Tilt>
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
        <Tilt className='introBanner' options={options}>
          <div className='introContainer'>
            <Tilt className="introText" options={optionsMediumTilt}>
              <p>Design</p>
              <p>Web- og apputvikling</p>
              <p>Brandutvikling</p>
            </Tilt>
            <Tilt className="introAboutMe" options={optionsSmallTilt}>
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
              
            </Tilt>
            <div className="garanti"></div>
            <div className='nextButton'>
              <div className="nextArrow"></div>
            </div>
          </div>
        </Tilt>
      </section>


      <section className="slideshowSection">
        <div className="slideshowView">
          {/*<div className="slideshowHeader">
            <div className="logo"></div>
            <div className="slideshowContact">
              <p>Kontakt</p>
              <div className="contactLine"></div>
            </div>
  </div>*/}
          <div className="slideshowContent">
            <p>Skap<br/>engasjement.</p>
          </div>
        </div>
      </section>

      <section className="myServiceSection">
        <div className="serviceView">
          <div className="serviceTextView">
            <h6>Mine<br/>tjenester</h6>
            <div className="servicesDescription">
              <p>Jeg tilbyr flere tjenester innen 
                  frontent- og mobilutvikling, visuell 
                  kommunikasjon, samt produkt- og brandutvikling.
              </p>
            </div>
          </div>
          <div className="servicesGraphic">

          </div>
        </div>
      </section>

      {/*<div className='contactSlider'>
        <p>Kontakt</p>
</div>*/}

    </div>
  );
}

export default App;
