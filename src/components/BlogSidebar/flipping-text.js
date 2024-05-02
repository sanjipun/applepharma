import React, { useState, useEffect } from 'react';

const FlippingTextComponent = ({ texts, intervalTime }) => {
  const [textIndex, setTextIndex] = useState(0); // Initial index of text
  const [showText, setShowText] = useState(true); // State for handling transition

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Start transition
      setTimeout(() => {
        setTextIndex((textIndex + 1) % texts.length); // Change text after transition
        setShowText(true); // End transition
      }, 100); // Wait for 1 second for the transition to complete
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [textIndex, texts.length, intervalTime]);

  return (
    <div className="flipping-text-inner ">
      {showText && (
        <span className={showText ? 'slide-up-enter' : ''}>
          {texts[textIndex]}
        </span>
      )}
    </div>
  );
};

export default FlippingTextComponent;