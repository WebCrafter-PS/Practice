import { useState } from "react";

//generate password 8 characters - alphabets, numbers, special chars
const PasswordGenerator = () => {
  const temparr = [];
  const [newArray, setNewArray] = useState([]);
  const al_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVUWXYZ";
  const numbers = "0123456789";
  const special_chars = "!@#$%^&*()";
  const chars = al_chars + numbers + special_chars;

  const chars_array = chars.split("");

  const password = () => {
    const min = 0;
    const max = chars_array.length - 1;

    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      // setNewArray((prevArray) => [...prevArray, chars_array[random]]);
      //this make every element to be stored in an array. - so use push then state

      temparr.push(chars_array[random]);
    }
    setNewArray(temparr);
  };

  return (
    <div>
      <h1 onClick={password}>Password Generator</h1>
      <h2>Password is {newArray}</h2>
    </div>
  );
};
export default PasswordGenerator;
