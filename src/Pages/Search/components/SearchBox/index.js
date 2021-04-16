import { useState } from "react";

import "./style.css";

export default function SearchBox({ onSearch, onClose }) {
  const [searchInputText, setsearchInputText] = useState("");

  const onInputSearchChange = (evt) => setsearchInputText(evt.target.value);
  const onCloseHandler = () => {
    onClose();
    setsearchInputText("");
  };

  const onSearchHandler = () =>
    searchInputText?.length > 0 && onSearch(searchInputText);

  return (
    <div className="searchBox">
      <h2>SEARCH USER</h2>
      <div>
        <label htmlFor="InputSearch">
          <input
            className="inputSearch"
            value={searchInputText}
            onChange={onInputSearchChange}
            type="text"
          />
        </label>
        <label htmlFor="Search">
          <button
            disabled={searchInputText?.length === 0}
            className="inputButtons searchButton"
            onClick={onSearchHandler}
          >
            Search
          </button>
        </label>
        {searchInputText?.length !== 0 && (
          <label htmlFor="Cancel">
            <button className="inputButtons cancelButton" onClick={onCloseHandler}>
              Cancel
            </button>
          </label>
        )}
      </div>
    </div>
  );
}
