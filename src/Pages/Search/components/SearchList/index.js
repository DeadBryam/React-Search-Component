import SearchListCard from "./searchListCard";
import "./style.css";

export default function SearchList({ data }) {

  return (
    <div className="searchList">
      {data?.map((val) => (
        <SearchListCard key={val.id} {...val} />
      ))}
      ;
    </div>
  );
}
