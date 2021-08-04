import React from 'react';
import { useSelector } from 'react-redux';

import Earth from '../assets/planet-earth.svg'
import earthInternal from '../assets/planet-earth-internal.svg'
import earthSurface from '../assets/geology-earth.png'
import Mars from '../assets/planet-mars.svg'
import marsInternal from '../assets/planet-mars-internal.svg'
import marsSurface from '../assets/geology-mars.png'
import Mercury from '../assets/planet-mercury.svg'
import mercuryInternal from '../assets/planet-mercury-internal.svg'
import mercurySurface from '../assets/geology-mercury.png'
import Venus from '../assets/planet-venus.svg'
import venusInternal from '../assets/planet-venus-internal.svg'
import venusSurface from '../assets/geology-venus.png'
import Jupiter from '../assets/planet-jupiter.svg'
import jupiterInternal from '../assets/planet-jupiter-internal.svg'
import jupiterSurface from '../assets/geology-jupiter.png'
import Saturn from '../assets/planet-saturn.svg'
import saturnInternal from '../assets/planet-saturn-internal.svg'
import saturnSurface from '../assets/geology-saturn.png'
import Neptune from '../assets/planet-neptune.svg'
import neptuneInternal from '../assets/planet-neptune-internal.svg'
import neptuneSurface from '../assets/geology-neptune.png'
import Uranus from '../assets/planet-uranus.svg'
import uranusInternal from '../assets/planet-uranus-internal.svg'
import uranusSurface from '../assets/geology-uranus.png'


const Planets = (props) => {
  const activeImage = useSelector((state) => state.overview.value);

    const {data} = props;
    let image, imgInternal, imgSurface


    switch (data) {
        case "Earth":
          image = Earth;
          imgInternal = earthInternal;
          imgSurface = earthSurface;
          break;
        case "Mars":
          image = Mars;
          imgInternal = marsInternal;
          imgSurface = marsSurface;
          break;
        case "Mercury":
          image = Mercury;
          imgInternal = mercuryInternal;
          imgSurface = mercurySurface;
          break;
        case "Venus": 
          image = Venus;
          imgInternal = venusInternal;
          imgSurface = venusSurface;
          break;
        case "Jupiter":
          image = Jupiter;
          imgInternal = jupiterInternal;
          imgSurface = jupiterSurface;
          break;
        case "Neptune": 
          image = Neptune;
          imgInternal = neptuneInternal;
          imgSurface = neptuneSurface;
          break;
        case "Saturn":
          image = Saturn;
          imgInternal = saturnInternal;
          imgSurface = saturnSurface;
          break;
        case "Uranus":
          image = Uranus;
          imgInternal = uranusInternal;
          imgSurface = uranusSurface;
          break;
      
        default:
          break;
      }
    return (
        <div id="planets">
          {activeImage.internal ? <img className="img-fluid" src={imgInternal} alt="internal" /> 
          : activeImage.surface ? <><img className="img-fluid" src={image} alt="planet"/><img className="img-fluid surfaceImage" src={imgSurface} alt="surface"/></>
          : <img className="img-fluid" src={image} alt="planet"/>
          }
            
            
        </div>
    )
}


export default Planets;