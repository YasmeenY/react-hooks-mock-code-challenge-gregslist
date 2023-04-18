import React, {useState} from "react";

function Search({handleSearch}) {

  const [searchQuery, setSearchQuery] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchQuery)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
