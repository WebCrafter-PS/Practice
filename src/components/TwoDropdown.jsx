import { useState } from "react";
import { countryData } from "./DropDown";

//when select any county display it's states in another dropdown
const TwoDropDown = () => {
  const [country1, setCountry] = useState("");
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countryData.map((data, index) => (
          <option key={index} value={data.country}>
            {data.country}
          </option>
        ))}
      </select>
      {/* for States */}
      <select>
        {countryData.map(
          (data) =>
            data.country === country1 &&
            data.states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))
        )}
      </select>
    </div>
  );
};
export default TwoDropDown;
