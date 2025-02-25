import {  useState } from "react";

//Generate OTP - 6 digits
const OTP = () => {
  const [otp, setOtp] = useState();
  const clickHandler = () => {
    const length = 6;
    const min = Math.pow(10, length - 1); //10 pow 5 = 100000 (snallest num)
    const max = Math.pow(10, length) - 1; //10 pow 6 = 1000000 -1 = 999999 (largest)

    setOtp(Math.floor(Math.random() * (max - min + 1) + min));
  };
  return (
    <div className="otp">
      <button onClick={clickHandler}>Generate OTP</button>
      <h2>{otp}</h2>
    </div>
  );
};
export default OTP;
