import { useEffect } from "react";
import { useState } from "react";

//use debouncing for search with delay - google search api
const SearchDebounce = () => {
  const [userInput, setUserInput] = useState("");
  const [res, setRes] = useState([]);
  const SEARCH_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

  let url = SEARCH_SUGGESTIONS_API + userInput;

  useEffect(() => {
    let timer = setTimeout(() => {
      const apicall = async () => {
        const request = await fetch(url);
        const response = await request.json();
        setRes(response);
      };

      apicall();
    }, 300); //if df bw 2 key strokes is 300ms, decline the api call
    return () => {
      clearTimeout(timer);
    };
  }, [userInput]);

  return (
    <div className="debounce">
      <h1>Search with debounce</h1>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <div className="search-results">
        {res[1] && res[1].map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
};
export default SearchDebounce;
