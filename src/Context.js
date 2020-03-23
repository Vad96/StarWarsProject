import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [starWarsData, setStarWarsData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [pageNumber, setPageNumber] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const url = `https://swapi.co/api/people/?page=${pageNumber}`;

    useEffect(() => {
        const initialFavoriteItems = localStorage.getItem("favorites");
        if (initialFavoriteItems) {
            setFavoriteCharacters(JSON.parse(initialFavoriteItems));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("favorites", JSON.stringify(favoriteCharacters));
        setIsButtonDisabled(true);
        setIsDataLoaded(false)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setStarWarsData(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setIsButtonDisabled(false);
                setIsDataLoaded(true)
            });
    }, [pageNumber, favoriteCharacters, url]);

    function getNextPage() {
        if (nextPage) {
            setPageNumber(prevPage => prevPage + 1);
        }
        return;
    }

    function getPrevPage() {
        if (prevPage) {
            setPageNumber(prev => prev - 1);
        }
        return;
    }

    function addToFavorite(newCharacter) {
        setFavoriteCharacters(prev => [...prev, newCharacter]);
    }

    function removeFromFavorite(name) {
        setFavoriteCharacters(prev => prev.filter(item => item !== name));
    }

    return (
        <Context.Provider
            value={{
                starWarsData,
                getNextPage,
                getPrevPage,
                isButtonDisabled,
                favoriteCharacters,
                addToFavorite,
                removeFromFavorite,
                isDataLoaded
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
