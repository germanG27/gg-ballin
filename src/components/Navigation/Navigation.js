import React from 'react';
import linkedin from './linkedin.svg';
import mail from './mail.svg';

const Navigation = ({onRouteChange}) => {
    
    return (
        <div>
        <a href="https://www.linkedin.com/in/german-ariel-gomez-781040152/" 
          target ="_blank" 
          rel = "noopener noreferrer">
            <img 
            className= "logo-linkedin" 
            alt="linkedin" 
            src= {linkedin}  />
          </a>
          <img 
          className= "logo-mail" 
          alt= "mail" 
          src={mail} 
          onClick={() => onRouteChange('contacto')}/> 
          </div>
    );
}

export default Navigation;