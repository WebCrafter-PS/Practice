//fetch data using api call
//error handling -try & catch

import { useEffect, useState } from "react";

//display photos api
const ApiCall = () => {
  const [photos, setPhotos] = useState([]);
  const tempArr = [];
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");

      data.ok === true && console.log("success");
      const obj = await data.json();
      //const [{title}] =obj; WRONG - its a array of many objects not 1

      obj.map((photo) => photo.id <= 10 && tempArr.push(photo.url));
      setPhotos(tempArr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>API</h1>
      {photos.map((photo, index) => (
        <img src={photo} key={index}></img>
      ))}
    </div>
  );
};
export default ApiCall;
