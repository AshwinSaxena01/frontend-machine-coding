const SuggestionsList = ({ loading, items }) => {
  return (
    <div>
      <ul>
        {loading && <div>Loading...</div>}
        {items.length > 0 && !loading ? (
          items.map((item) => {
            return <li>{item}</li>;
          })
        ) : (
          <span></span>
        )}
      </ul>
    </div>
  );
};

export default SuggestionsList;
