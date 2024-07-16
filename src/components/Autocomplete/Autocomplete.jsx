import { useEffect, useState } from "react";
import SuggestionsList from "./SuggestionsList";

const Autocomplete = ({
  staticData,
  fetchSuggestions,
  placeholder,
  dataKey,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getSuggestions = async (query) => {
    if (staticData) {
      const result = staticData.filter((item) => {
        item.toLowerCase().includes(query.toLowerCase());
      });
      setSuggestions(result);
    } else if (fetchSuggestions) {
      try {
        setLoading(true);
        const result = await fetchSuggestions(query);
        if (dataKey) {
          setSuggestions(result.map((item) => item[dataKey]));
        } else {
          setSuggestions(result);
        }
      } catch (e) {
        setSuggestions([]);
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <SuggestionsList loading={loading} items={suggestions}></SuggestionsList>
    </div>
  );
};

export default Autocomplete;
