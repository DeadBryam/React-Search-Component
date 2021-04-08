import SearchListCard from "./searchListCard";
import "./style.css";

export default function SearchList({ data }) {
  console.log(data);

  return (
    <div className="searchList">
      {data?.map((val) => (
        <SearchListCard key={val.id} {...val} />
      ))}
      ;
    </div>
  );
}
