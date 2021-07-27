import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PlanetBio from '../components/PlanetBio';
import Planets from '../components/Planets';
import Stats from '../components/Stats';

import * as funcs from '../utils/functions';
import content from '../utils/content';
import Buttons from '../components/Buttons';

const { days: Sdays, revolution: Srevolution, radius: Sradius, temp: Stemp } = content.Mercury.stats;


const Mercury = () => {
    useEffect(() => {
        let days = document.getElementById('days');
        let revolution = document.getElementById('revolution');
        let radius = document.getElementById('radius');
        let temp = document.getElementById('temp');
        funcs.animateValue(days, 0, Sdays, 1500);
        funcs.animateValue(revolution, 0, Srevolution, 1500);
        funcs.animateValue(radius, 0, Sradius, 1500);
        funcs.animateValue(temp, 0, Stemp, 1500);
        funcs.testMe();
    }, []
)


    return (
        <>
        <Container className="grid-display">
            <Planets data="Mercury"/>
            <PlanetBio planet="Mercury"/>
            <Buttons/>
        </Container>
        <Container>
            <div className="statsContainer">
                <Stats id="days" statLine="rotation time" statName="days"/>
                <Stats id="revolution" statLine="revolution time" statName="days"/>
                <Stats id="radius" statLine="radius" statName="KM"/>
                <Stats id="temp" statLine="average temp" statName="&#176; c"/>
            </div>            
        </Container>
        </>
    )
}

export default Mercury;