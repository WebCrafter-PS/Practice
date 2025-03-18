/* eslint-disable react/prop-types */
//Multi-step form
//1. login - username, password
//2. personal info - u, age dob, gender, place(state)
//3. education details - marks, checkbox

import { useEffect, useState } from "react";
function FormLogin() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //get form data
    const form = e.target;
    const formdata = new FormData(form);

    const user = formdata.get("username");
    const pass = formdata.get("password");

    setLoginInfo({ username: user, password: pass });

    // for (let [key, value] of formdata.entries(formdata)) {}
  };

  return (
    <div className="form1">
      <h1>User Login</h1>
      <form onSubmit={handleSubmit} method="post" className="formLogin">
        <label>Username : </label>
        <input type="text" name="username" defaultValue={"User"} />
        <label>Password : </label>
        <input type="password" name="password" pattern="[0-9]{5}" />
        <button type="submit">Submit</button>
      </form>
      <PersonalInfo info={loginInfo} />
    </div>
  );
}
export default FormLogin;

//2.
function PersonalInfo({ info }) {
  const { username } = info;
  const [country, setCountry] = useState([]);
  const [formdata, setFormdata] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      const request = await fetch(
        "https://restcountries.com/v3.1/region/asia/",
        { method: "GET" }
      );
      const response = await request.json();
      const display = response.map((country) => country.name.common);
      display.sort(); //Alphabetical order - overwrites
      setCountry(display);
    };
    getCountry();
  }, []);

  const afterSubmit = (formdata) => {
    // const data = formdata.get("dob");
    const formObject = Object.fromEntries(formdata.entries()); // ✅ Convert to object

    setFormdata((prevFormdata) => [...prevFormdata, formObject]);
  };

  return (
    <div className="personal">
      <h1>Fill Personal Information</h1>
      <form action={afterSubmit} className="formLogin1">
        <label>
          Username: <input disabled value={username} name="username" />
        </label>
        <label>
          Age: <input type="number" min={18} max={50} name="age" />
        </label>
        <label>
          gender: <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          DOB: <input type="date" name="dob" />
        </label>
        <label>
          Address:
          <select className="dropdown" name="dropdown">
            {country.map((cur, index) => (
              <option key={index} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
      <EducationInfo formdata={formdata} name={username} />
    </div>
  );
}

//3.
const EducationInfo = ({ formdata, name }) => {
  const { age, dob, gender, dropdown } = formdata;
  return (
    <div>
      <h1>Education Details</h1>
      <form className="formLogin2">
        <label> Username:</label>
        <input disabled value={name} name="username" />
        <label className="edu">Education: </label>
        <label>
          10<sup>th</sup> <input type="checkbox" name="checkbox" />
        </label>
        <label>
          12<sup>th</sup> <input type="checkbox" name="checkbox" />
        </label>
        <label>
          BE <input type="checkbox" name="checkbox" />
        </label>
        <label>
          PHD <input type="checkbox" name="checkbox" />
        </label>
        <label>Upload file:</label>
        <input type="file" name="filename"/>
        <label>Reset:  <input type="reset"/>  Submit: <input type="submit"/></label>
      </form>
      <div className="alldata">
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{dob}</li>
          <li>{gender}</li>
          <li>{dropdown}</li>
        </ul>
      </div>
    </div>
  );
};
