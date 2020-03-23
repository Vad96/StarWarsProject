import React from "react";
import Sky from 'react-sky';
import starWars from "../images/starWars.svg";
import chewbacca from "../images/chewbacca.svg";
import yoda from "../images/yoda.svg";
import robot from "../images/robot.svg";
import vader from "../images/vader.svg";

function Animation() {
    return (
        <Sky
            images={{
                0: starWars,
                1: chewbacca,
                2: yoda,
                3: robot,
                4: vader,
            }}
            how={100}
            time={90}
            size={'50px'} 
            background={'#3a4856'}
      />
    )
}

export default Animation
