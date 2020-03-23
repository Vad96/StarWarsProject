import React, { useContext, useEffect, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../../../Context";
import Loader from "react-loader-spinner";
import HeroPlanetDetails from './HeroPlanetDetails';
import HeroProfileDetails from './HeroProfileDetails';

function HeroDetails() {
    const {starWarsData, favoriteCharacters, addToFavorite, removeFromFavorite} = useContext(Context);
    const { name } = useParams();
    const [films, setFilms] = useState();
    const [homeworld, setHomeworld] = useState();
    const [isHomeWorldLoaded, setIsHomeWorldLoaded] = useState(false);
    const [isFilmLoaded, setIsFilmLoaded] = useState(false);

    const heroInfo = starWarsData.find(item => item.name === name);

    useEffect(() => {
        const fetchHomeworld = heroInfo.homeworld;
        fetch(fetchHomeworld)
            .then(response => response.json())
            .then(data => {
                setHomeworld(data)
                setIsHomeWorldLoaded(true);
                
                const filmsArray = [];
                const fetchFilms = data.films.map(filmUrl =>
                    fetch(filmUrl)
                        .then(res => res.json())
                        .then(data => {
                        filmsArray.push(
                            `${data.episode_id} - ${data.title}: ${data.release_date}`
                        );
                        filmsArray.sort();
                        })
                );

                Promise.all(fetchFilms)
                    .then(() => {
                        setFilms(filmsArray);
                        setIsFilmLoaded(true);
                    })
                    .catch(err => console.log("error: ", err));
            });
    }, [heroInfo.homeworld]);

    function getCharacterFilms() {
        let allFilms = films.map((item, i) => <li className="additional-info_item" key={i}>{item}</li>);
        return allFilms;
    }

    function getCharacterIcon() {
        const alreadyInFavorite = favoriteCharacters.some(item => item === heroInfo.name);
        if (alreadyInFavorite) {
            return (
                <i  className="fas fa-user-minus info-list_name-icon"
                    onClick={() => removeFromFavorite(heroInfo.name)}
                ></i>
            );
        } else {
            return (
                <i  className="fas fa-user-plus info-list_name-icon"
                    onClick={() => addToFavorite(heroInfo.name)}
                ></i>
            );
        }
    }

  return (
    <main className="page-wrapper">

        <HeroProfileDetails
            name={heroInfo.name} 
            icon={getCharacterIcon()} 
            height={heroInfo.height} 
            mass={heroInfo.mass}
            hairColor={heroInfo.hair_color}
            skinColor={heroInfo.skin_color}
            eyesColor={heroInfo.eyes_color}
            birthYear={heroInfo.birth_year}
            gender={heroInfo.gender}
        />
 
        <div className="info-link">
            <Link to={`/info/${heroInfo.name}/films`}>
                <div className="info-link-item">Films</div>
            </Link>
            <Link to={`/info/${heroInfo.name}/homeworld`}>
                <div className="info-link-item">World</div>
            </Link>
        </div>

        <Switch>
            <Route exact path="/info/:name/films">
                <ul className="additional-info">
                    {isFilmLoaded ? (getCharacterFilms()) : <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
                </ul>
            </Route>

            <Route exact path="/info/:name/homeworld">
                {isHomeWorldLoaded ? 
                    <HeroPlanetDetails 
                        planet={homeworld.name} 
                        climate={homeworld.climate} 
                        population={homeworld.population}/> : 
                    <Loader type="Circles" color="#00BFFF" height={100} width={100} />}
            </Route>
        </Switch>
    </main>
  );
}

export default HeroDetails;
