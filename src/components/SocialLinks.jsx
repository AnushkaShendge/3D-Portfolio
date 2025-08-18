import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <div className="flex gap-4">
      {links.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      )}
      {links.leetcode && (
        <a
          href={links.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white"
        >
          <i className="fas fa-code"></i> LeetCode
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
