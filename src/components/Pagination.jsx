//Pagination - navigation to different pages like google 1,2,3
//fetch user details api - 1 user in 1 page
//give page numbers at the end

import { useEffect } from "react";

export default function Pagination() {
  useEffect(() => {
    const getData = async () => {
      const request = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await request.json();
      console.log(response)
    };
    getData();
  }, []);
  return (
    <div className="pagination">
      <h1>Pagination</h1>
    </div>
  );
}
