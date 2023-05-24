import React, { useEffect, useState } from "react";
import "./flares.css";

const SnowAnimation = ({ show }) => {
  const [flowerPetals, setFlowerPetals] = useState([]);

  useEffect(() => {
    if (show) {
      // Start the animation
      const animationInterval = setInterval(() => {
        setFlowerPetals((prevPetals) => {
          const newPetal = {
            id: Date.now(),
            top: -10,
            left: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: 3 + Math.random() * 2,
          };
          return [...prevPetals, newPetal];
        });
      }, 500);

      return () => {
        // Stop the animation
        clearInterval(animationInterval);
      };
    }
  }, [show]);

  return (
    <div className={`snow-animation-container ${show ? "show" : ""}`}>
      {flowerPetals.map((petal) => (
        <div
          key={petal.id}
          className="flower-petal"
          style={{
            top: `${petal.top}%`,
            left: `${petal.left}%`,
            opacity: petal.opacity,
            animationDuration: `${petal.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowAnimation;
