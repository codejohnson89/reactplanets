import React from 'react';

import Earth from '../assets/planet-earth.svg'
import Mars from '../assets/planet-mars.svg'
import Mercury from '../assets/planet-mercury.svg'
import Venus from '../assets/planet-venus.svg'
import Jupiter from '../assets/planet-jupiter.svg'
import Saturn from '../assets/planet-saturn.svg'
import Neptune from '../assets/planet-neptune.svg'
import Uranus from '../assets/planet-uranus.svg'


const Planets = (props) => {

    const {data} = props;
    let image

    switch (data) {
        case "Earth":
          image = Earth;
          break;
        case "Mars":
          image = Mars;
          break;
        case "Mercury":
          image = Mercury;
          break;
        case "Venus": 
          image = Venus;
          break;
        case "Jupiter":
          image = Jupiter;
          break;
        case "Neptune": 
          image = Neptune;
          break;
        case "Saturn":
          image = Saturn;
          break;
        case "Uranus":
          image = Uranus;
          break;
      
        default:
          break;
      }
    return (
        <div id="planets">
            <img src={image} alt="planet"/>
        </div>
    )
}


export default Planets;