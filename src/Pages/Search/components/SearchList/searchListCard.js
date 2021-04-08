import SearchListCardItem from "./searchListCardItem";

export default function SearchListCard({ id, title, body }) {
  return (
    <div className="searchListCard" key={id}>
      <SearchListCardItem title="ID" body={id}/>
      <SearchListCardItem title="TITLE" body={title}/>
      <SearchListCardItem title="BODY" body={body}/>
    </div>
  );
}