import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchList from "./components/SearchList";

import "./style.css";

export default function Search() {
  const [searching, setSearching] = useState(false);
  const [results, setReults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fillData = fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
    // fillData();
  }, []);

  const onSearchHandler = (searchText) => {
    if (searchText?.length > 0) {
      setSearching(true);
      const filteredData = data.filter(
        (item) =>
          item.name.includes(searchText) ||
          item.username.includes(searchText) ||
          item.email.includes(searchText) ||
          item.phone.includes(searchText) ||
          item.website.includes(searchText)
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
      {results?.length !== 0 && <SearchList data={results} />}
    </div>
  );
}
