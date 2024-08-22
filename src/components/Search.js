import React from "react";

function Search({ searchTerm, onSearchChange}) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search free stuff"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="searchbar__input"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
