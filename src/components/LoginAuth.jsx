//2. api call for user login

import { useState } from "react";

const LoginAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};
export default LoginAuth;
