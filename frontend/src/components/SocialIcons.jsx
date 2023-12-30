import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://github.com/Shivji1999" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} color="#fff" />
      </a>
      <a href="https://linkedin.com/in/shivji-dubey" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} color="#fff" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} color="#fff" />
      </a>
    </div>
  );
}

export default SocialIcons;
