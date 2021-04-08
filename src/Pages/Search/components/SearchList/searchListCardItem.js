export default function SearchListCardItem({ title, body }) {
  return (
    <div className="searchListCardItem">
      <p className="searchListCardTitle">{title}</p>
      <p className="searchListCardBody">{body}</p>
    </div>
  );
}