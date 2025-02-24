//count down till 10
//setTimeout - after that time do something (only 1 once),
//setInterval - each time interval do something

import { useEffect, useState } from "react";

const Timer = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown <= 0) return; //Stop effect if countdown is 0

    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    //clear interval to prevent memory leak
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div>
      <h3>Timer :{countdown} </h3>
    </div>
  );
};
export default Timer;
