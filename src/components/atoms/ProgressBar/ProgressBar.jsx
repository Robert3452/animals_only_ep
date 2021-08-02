import React, { useState, useEffect, useRef } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  const progressBar = useRef();
  const audioPlayer = useRef();

  useEffect(() => {
    setValue
  }, [])

  return (
    <div className="progressbar_container">
      <input className="progressBar" type="range" max="100" min="0" value="0" />
    </div>
  );
};

export default ProgressBar;
