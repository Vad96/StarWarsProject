import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import SearchSidebar from "../SearchSidebar";
import Loader from "react-loader-spinner";

function People() {
    const {starWarsData, getNextPage, getPrevPage, isButtonDisabled, isDataLoaded} = useContext(Context);
    const [peopleInputValue, setPeopleInputValue] = useState("");
    const [peopleSearchResults, setPeopleSearchResults] = React.useState([]);
    
    const personsNames = starWarsData.map(item => item.name);

    const people = peopleSearchResults.map(item => (
        <li key={item} className="people-list_item">
            <Link to={`/info/${item}`}>{item}</Link>
        </li>
    ));

    useEffect(() => {
        const results = personsNames.filter(name =>
            name.toUpperCase().includes(peopleInputValue.toUpperCase())
        );
        setPeopleSearchResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [starWarsData, peopleInputValue]);

    function handlePeopleList(event) {
        setPeopleInputValue(event.target.value);
    }

    return (
        <main className="page-wrapper">
            <div className="main-content_wrapper">
                {isDataLoaded ? <ul className="people-list">{people}</ul>: 
                <div className="spinner-container">
                    <Loader type="Puff" color="#3a4856" height={300} width={200} /> 
                </div>}
                <SearchSidebar value={peopleInputValue} onChange={handlePeopleList} />
            </div>
            
            <button className="pagination-button previous-button" disabled={isButtonDisabled} onClick={getPrevPage}>
                <i className="fas fa-arrow-left"></i>
            </button>
            
            <button className="pagination-button previous" disabled={isButtonDisabled} onClick={getNextPage}>
                <i className="fas fa-arrow-right"></i>
            </button>
        </main>
    );
}

export default People;
