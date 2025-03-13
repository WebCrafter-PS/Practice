//1. client-validation email & password using REGEX
//2. phone number inline

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailValidate(email) {
    let pattern = /[A-z0-9]@[A-Z].[A-Z]/gi;
    const result = pattern.test(email);
    return result;
  }
  function passwordValidate() {
    //8 chars - CAPS, small, number, special char (atleast one) - Ab1@5678
    let pattern = /[A-Z]+[a-z]+[0-9]+[@#$%^&*()!]*.{8,}/g;
    const res = pattern.test(password);
    return res; //true/false
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValidate(email) && passwordValidate(password)) {
      console.log("email & password is valid", email);
    } else {
      console.log("user not valid", email, password);
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
