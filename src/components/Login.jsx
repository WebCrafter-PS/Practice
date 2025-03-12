//1.email & password

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(userDetails);

  function emailValidate(email) {
    let pattern = /[A-z0-9]@[A-Z].[A-Z]/gi;
    const result = pattern.test(email);
    return result;
  }
  function passwordValidate() {
    //8 chars - CAPS, small, number, special char (atleast one) - Ab1@5678
    // let pattern = /[A-Z]+[a-z]+[0-9]+[@#$%^&*()!]*.{8,}/g;
    // const res = pattern.test(password);
    return true; //true/false
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailValidate(email) && passwordValidate(password)) {
      console.log("email & password is valid", email);
    } else {
      console.log("user not valid", email, password);
    }

    //we can call an api and send the data to the server after client-side validation
    const url = "https://dummyjson.com/auth/login";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    try {
      const request = await fetch(url, requestOptions);
      const response = await request.json();
      //  console.log(response); will get 1 userdata based on u,p
      console.log(response.firstName + response.lastName);
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Username: </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Phone: </label>
          <input type="tel" pattern="[0-9]{10}" disabled />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
