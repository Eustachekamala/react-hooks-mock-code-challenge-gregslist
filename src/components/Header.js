import React, { useState } from "react";
import Search from "./Search";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    console.log(newSearchTerm);
  };


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
    </header>
  );
}

export default Header;
