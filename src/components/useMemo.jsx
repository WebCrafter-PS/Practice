//Memoization - cache result of a calculations bw re-renders
//we have a toggle(dark/light) and find nth prime number(heavy operation)

import { useState, useMemo } from "react";

//func to check the number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}

const Memoization = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("dark");
  console.log("component rendered..");

  const result = useMemo(() => findNthPrime(number), [number]);

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div className="memo">
      <h1>Memoization </h1>
      <div className="theme">
        <button className={`${theme}`} onClick={handleTheme}>
          {theme}
        </button>
      </div>
      <div className="prime">
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <p>{result}</p>
      </div>
    </div>
  );
};
export default Memoization;
