import React, {useState, useEffect} from 'react';
import './intro.css';

function Intro() {

  const [text, setText] = useState();

  useEffect(() => {
    let isMounted = true;
    const phrase = 'Shivji Dubey';

    const animateText = () => {
      let currentIndex = 0;
      let deleting = false;

      const interval = setInterval(() => {
        if (deleting) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          setText((prevText) => phrase.slice(0, currentIndex + 1));
        }

        if (!deleting && currentIndex === phrase.length) {
          deleting = true;
        }

        if (deleting && currentIndex === 1) {
          deleting = false;
        }

        if (!deleting) {
          currentIndex += 1;
        } else {
          currentIndex -= 1;
        }

        if (!isMounted) {
          clearInterval(interval);
        }
      }, 150); // Typing speed

      return () => {
        isMounted = false;
        clearInterval(interval);
      };
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="intro-section">
      <div className="intro-text">
        <h2>Hi, I'm</h2>
        <h1>{text}</h1>
        <p>Software Developer</p>
        <p>My introduction goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="intro-image">
        <img src="https://via.placeholder.com/300" alt="Random" />
      </div>
    </div>
  );
}

export default Intro;
