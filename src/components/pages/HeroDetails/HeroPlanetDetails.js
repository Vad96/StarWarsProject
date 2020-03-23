import React from "react";
import PropTypes from "prop-types";

function HeroPlanetDetails({planet, climate, population}) {
    return (
        <ul className="additional-info">
            <li className="additional-info_item"><strong>Planet: </strong>{planet}</li>
            <li className="additional-info_item"><strong>Climate: </strong>{climate}</li>
            <li className="additional-info_item"><strong>Population: </strong>{population}</li>
        </ul>
    )
}

HeroPlanetDetails.propTypes = {
    name: PropTypes.string,
    climate: PropTypes.string,
    population: PropTypes.string,
}

export default HeroPlanetDetails
