import  { useState, useEffect } from 'react';
const CurrentTime = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className="container mt-5">
    <div className="card">
      <div className="card-body text-center">
        <h1 className="card-title">Current Date and Time</h1>
        <p className="card-text">{currentDateTime.toLocaleDateString()}</p>
        <p className="card-text">{currentDateTime.toLocaleTimeString()}</p>
      </div>
    </div>
  </div>
  );
};

export default CurrentTime;
