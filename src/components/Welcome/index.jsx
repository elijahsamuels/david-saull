import React from "react";
import "./styles.css";
import getMobile from '../../utils/getMobile'


getMobile()
const Title = () => {
  return (
    <>
      <div className="overlay"></div>
    </>
  );
};

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="title">
        <Title />
      </div>
    </div>
  );
};

export default Welcome;
