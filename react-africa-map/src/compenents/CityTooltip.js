import React from "react";

function CityTooltip({style, name}) {
    return (
        <div style={style}>
            <div>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default CityTooltip;