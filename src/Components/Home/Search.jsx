import React, { useState } from 'react';

const Search = (props) => {
    const { onSubmit, } = props
    const [searchTerm, setSearchTerm ] = useState('')
    const handleSubmitForm = (e) => {
        e.preventDefault();
        onSubmit(searchTerm)
        console.log(searchTerm)
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <input name="search" value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;