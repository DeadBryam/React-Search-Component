import SearchListCardItem from "./searchListCardItem";

export default function SearchListCard({ id, name, username, email, phone, website}) {
  return (
    <div className="searchListCard" key={id}>
      <SearchListCardItem title="NAME" body={name}/>
      <SearchListCardItem title="USERNAME" body={username}/>
      <SearchListCardItem title="EMAIL" body={email}/>
      <SearchListCardItem title="PHONE" body={phone}/>
      <SearchListCardItem title="WEBSITE" body={website}/>
    </div>
  );
}