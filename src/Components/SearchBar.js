import React from 'react'

function SearchBar(props) {
    function onKeyPressed(e) {
        if (e.key === 'Enter') {
            props.searchFunction(e.currentTarget.value);
            e.currentTarget.value = "";
        }
    }

    return (
        <div id="search-container">
            <input
                type="text"
                id="search-bar"
                onKeyDown={onKeyPressed}
                placeholder="Enter city name"
            >
            </input>
        </div>
    )
}

export default SearchBar