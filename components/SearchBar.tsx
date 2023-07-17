'use client';
import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
    const [manufecturer, setMenufecturer] = useState("");
    const handleSearch = () =>{

    }
  return (
    <form onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer
                manufecturer = {manufecturer}
                setMenufecturer = {setMenufecturer}
            />
        </div>
    </form>
  )
}

export default SearchBar
