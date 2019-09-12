import React from "react";

function CountryTooltip({style, name, capital, population, flag}) {
    return (
        <div id="tooltip" style={style}>
            <div className="tooltip-text">
            <div>
                <img src={flag} alt="" className="ctr-tooltip-flag" />
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>{name}</span>
            </div>
            <div>
                <img src="./icons/capital.svg" alt="" className="ctr-tooltip-flag" />
                <span>{capital}</span>
            </div>
            <div>
                <img src="./icons/population.svg" alt="" className="ctr-tooltip-flag" />
                <span>{population}</span>
            </div>
            </div>
        </div>
    );
}

export default CountryTooltip;