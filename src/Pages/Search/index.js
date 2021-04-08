import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchList from "./components/SearchList";

import data from "../../data/posts.json";

import "./style.css";

export default function Search() {
  const [searching, setSearching] = useState(false);
  const [results, setReults] = useState([]);

  const onSearchHandler = (searchText) => {
    if (searchText?.length > 0) {
      setSearching(true);
      const filteredData = data.filter(
        (item) =>
          item.body.includes(searchText) || item.title.includes(searchText)
      );

        setReults(filteredData);
    }
  };

  const onCloseHandler = () => {
    setReults([]);
    setSearching(false);
  };

  return (
    <div className={`search search--${searching ? "top" : "center"}`}>
      <SearchBox
        searching={searching}
        onSearch={onSearchHandler}
        onClose={onCloseHandler}
      />
      {results?.length !== 0 && <SearchList data={results}/>}
    </div>
  );
}
