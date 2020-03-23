import React, {useState, useContext, useEffect } from "react";
import SearchSidebar from "../SearchSidebar";
import { Context } from "../../Context";

function Favorites() {
    const { favoriteCharacters } = useContext(Context);
    const [favoritesInputValue, setfavoritesInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    function handleFavorite(event) {
        setfavoritesInputValue(event.target.value)
    }

    useEffect(() => {
        const results = favoriteCharacters.filter(person =>
            person.toUpperCase().includes(favoritesInputValue.toUpperCase())
        );
        setSearchResults(results);
    }, [favoriteCharacters, favoritesInputValue]);

    const favorites = searchResults.map((item, i) => (
        <li className="favorites-item" key={i}>{item}</li>
    ));

    return (
        <main className="page-wrapper">
            <h1 className="favorites-header">Favorites</h1>
            <div className="main-content_wrapper">
                {favoriteCharacters.length > 0 ? <ul >{favorites}</ul> : <div>Your list is empty yet...</div>}
                <SearchSidebar value={favoritesInputValue}  onChange={handleFavorite} />
            </div>
        </main>
    );
}

export default Favorites;
