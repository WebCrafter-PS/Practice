import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const countryData = [
  {
    country: "USA",
    states: ["California", "Texas", "Florida", "New York", "Illinois"],
  },
  {
    country: "India",
    states: [
      "Maharashtra",
      "Karnataka",
      "Tamil Nadu",
      "Uttar Pradesh",
      "Gujarat",
    ],
  },
  {
    country: "Canada",
    states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  },
  {
    country: "Australia",
    states: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
    ],
  },
  {
    country: "Germany",
    states: ["Bavaria", "Berlin", "Hamburg", "Hesse", "Saxony"],
  },
];

const DropDown = () => {
    const [selectedOption,setSelectedOption] = useState('')
  return (
    <div>
      {/* only map through OPTIONS */}
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {countryData.map((data, index) => (
          <option key={index} value={data.country}>
            {data.country}
          </option>
        ))}
      </select>
      <p>Country selected is : {selectedOption}</p>
    </div>
  );
};
export default DropDown;
