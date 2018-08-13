import React, { Component } from 'react';
import logo from './SVG/logo.svg';
import Back_Image from './Images/background.jpg'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import Contacto from './components/Contacto/Contacto';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const particlesOptionsDiv = {
  "particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff345"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
}

class App extends React.Component {
  constructor () {
    super();
    this.state= {
      route: 'home',
      contacto: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({contacto: false})
    } else if (route === 'contacto') {
      this.setState({contacto:true})
    }
    this.setState({route:route});
  }
  
  
  render() {
    return (
       <div className="App">
          <header className="App-header">
            <Navigation />
            <h1 className = "name">
              <Fade bottom cascade>  
                Germán Gómez
              </Fade>
            </h1>
            <p className = "desc">
              <Fade bottom cascade> 
                Web developer.
              </Fade>
            </p>
          </header>
        
        <div>
        <Particles className = 'particles'
              params = {particlesOptionsDiv}
            />
        
        <Jumbotron />
        </div>
  
        <footer className = "App-footer"> 
          <Fade big cascade>  
            <img src={logo} className="App-logo" alt="logo" />
          </Fade>
             
          <p className = "OS"> 
          <Fade right big cascade>
          Open Source enthusiast. | 2018.
          </Fade>
          </p>
        </footer>
      </div>
      
    );
  }
}

export default App;
