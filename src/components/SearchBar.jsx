import { useState } from "react";
import { data } from "./data";

//input and search button
//data to filter through

const Search = () => {
  const [input, setInput] = useState("");
  const [dataArray, setDataArray] = useState(data || []);

  const handleClick = () => {
    //filter based on input - includes(input)
    const result = data.filter((cur) => cur.title.includes(input));
    
    setDataArray(result);
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Search</button>
      {dataArray.map((posts) => (
        <div key={posts.id}>
          <ul type = 'none'>
            <li><h3>{posts.title}</h3></li>
            <li> {posts.body}</li>
          </ul>
          
         
        </div>
      ))}
    </div>
  );
};
export default Search;
