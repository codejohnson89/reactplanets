import React from 'react';

const Stats = (props) => {
    const { id, statLine, statName } = props;
    return (
        <div className="stats">
            <h4>{statLine}</h4>
            <h2 id="test"><span id={id}>99</span> {statName}</h2>
        </div>
    )
}

export default Stats;