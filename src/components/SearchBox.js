import React from 'react';

const SearchBox = function ({ searchChange }) {
    return (
        <div>
            <input
                className='search-box'
                type='search'
                placeholder='Search Pokémon'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
