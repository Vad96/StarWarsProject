import React from "react";
import PropTypes from "prop-types";

function HeroProfileDetails({name, icon, height, mass, hairColor, skinColor, eyesColor, birthYear, gender}) {
    return (
        <ul className="info-list">
            <li className="info-list_item info-list_name">{name}{icon}</li>
            <li className="info-list_item"><strong>Height: </strong>{height}</li>
            <li className="info-list_item"><strong>Mass: </strong>{mass}</li>
            <li className="info-list_item"><strong>Hair: </strong>{hairColor}</li>
            <li className="info-list_item"><strong>Skin: </strong>{skinColor}</li>
            <li className="info-list_item"><strong>Eyes: </strong>{eyesColor}</li>
            <li className="info-list_item"><strong>D.O.B: </strong>{birthYear}</li>
            <li className="info-list_item"><strong>Gender: </strong>{gender}</li>
      </ul>
    )
}

HeroProfileDetails.propTypes = {
    name: PropTypes.string, 
    icon: PropTypes.object,
    height: PropTypes.string, 
    hairColor: PropTypes.string,
    skinColor: PropTypes.string,
    eyesColor: PropTypes.string, 
    birthYear: PropTypes.string, 
    gender: PropTypes.string,
}

export default HeroProfileDetails
