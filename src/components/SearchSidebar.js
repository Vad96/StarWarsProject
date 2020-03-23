import React from "react";
import PropTypes from "prop-types"

function SearchSidebar({value, onChange}) {
    return (
        <div className="search-sidebar">
            <input
                type="text"
                placeholder="type to search"
                className="search-sidebar_input"
                value={value}
                name="favoriteSearch"
                onChange={onChange}
            ></input>
        </div>
    );
}

SearchSidebar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default SearchSidebar;
