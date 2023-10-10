import React, {useState} from "react";

function Search({setSearchTerm}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(e.target.search.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search free stuff"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
