import React from 'react';
import {useSpring, animated} from 'react-spring';

const AnimatedElement = () => {
  const [{xy}, set] = useSpring(() => ({xy: [0, 0]}));

  const handleMouseMove = event => {
    set({xy: [event.clientX - window.innerWidth / 2, event.clientY - window.innerHeight / 2]});
  };

  return (
    <animated.div 
      onMouseMove={handleMouseMove}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0) scale(1.1)`),
      }}>
      {/* Your element */}
    </animated.div>
  );
};

export default AnimatedElement;
