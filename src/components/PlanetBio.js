import React from 'react';
import { useSelector } from 'react-redux';


import content from '../utils/content';



const PlanetBio = (props) => {

  const dataContent = useSelector((state) => state.overview.value);

  const Earth = content.Earth.content
  const Mars = content.Mars.content
  const Mercury = content.Mercury.content
  const Venus = content.Venus.content
  const Jupiter = content.Jupiter.content
  const Neptune = content.Neptune.content
  const Saturn = content.Saturn.content
  const Uranus = content.Uranus.content
  let { planet } = props;

  let data;

  switch (planet) {
    case "Earth":
      data = Earth;
      break;
    case "Mars":
      data = Mars;
      break;
    case "Mercury":
      data = Mercury;
      break;
    case "Venus": 
      data = Venus;
      break;
    case "Jupiter":
      data = Jupiter;
      break;
    case "Neptune": 
      data = Neptune;
      break;
    case "Saturn":
      data = Saturn;
      break;
    case "Uranus":
      data = Uranus;
      break;
  
    default:
      break;
  }

    return (
        <div className="planet-bio">
            <h1>{planet}</h1>
            {dataContent.overview ? <p id="planentContent" className="content" >{data.overview}</p> : null}
            {dataContent.internal ? <p id="planentContent" className="content">{data.internal}</p>: null}
            {dataContent.surface ? <p id="planentContent" className="content">{data.surface}</p>: null}
            <p className="wiki">Source: Wikipedia</p>
        </div>
    )
}

export default PlanetBio;