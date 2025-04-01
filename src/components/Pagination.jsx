//Pagination - navigation to different pages like google 1,2,3
//fetch user details api - 1 user in 1 page
//give page numbers at the end

import { useEffect, useState } from "react";

export default function Pagination() {
  const [userDetails, setUserDetails] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);
  const [showPage, setShowPage] = useState();
  useEffect(() => {
    const getData = async () => {
      const request = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await request.json();
      setUserDetails(response);
      setPageNumber(
        Array(response.length)
          .fill(0)
          .map((_, i) => i + 1)
      );
    };
    getData();
  }, []);

  const handlePage = (pageNum) => {
    setShowPage(pageNum); //which page to display in ui
  };

  return (
    <div className="pagination">
      <h1>Pagination</h1>
      {userDetails.map(
        (user, index) =>
          index + 1 == showPage && (
            <ul className="user" key={index}>
              <li>Name:{user.name} </li>
              <li>UserName:{user.username} </li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
              <li>Address: {user.address.city}</li>
            </ul>
          )
      )}

      <div className="pagebox">
        {pageNumber.map((ele, index) => (
          <div className="pagenum" key={index} onClick={() => handlePage(ele)}>
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}
