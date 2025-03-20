/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
export default function ParentProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => { //it takes a callback function
        if (prev >= 100) {
          clearInterval(interval);//can clear timer inside callback fn
          return 100; //or it will return 101()
        }
        return prev + 1; //else case
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      Progress Bar
      <ProgressBar text={progress} width={progress} />
    </div>
  );
}

const ProgressBar = ({ width, text }) => {
  return (
    <div className="progressBar">
      <div className="progressHolder" style={{ width: `${width}%` }}>
        {text}
      </div>
    </div>
  );
};
