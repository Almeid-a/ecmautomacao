import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

export const NextArrow = ({ className, style, onClick, darkMode }) => (
  <FontAwesomeIcon
    icon={faChevronCircleRight}
    className={`${className}`}
    style={{ ...style, fontSize: '24px', color: darkMode ? '#ffffff' : '#1F2937' }}
    onClick={onClick}
  />
);

export const PrevArrow = ({ className, style, onClick, darkMode }) => (
  <FontAwesomeIcon
    icon={faChevronCircleLeft}
    className={`${className}`}
    style={{ ...style, fontSize: '24px', color: darkMode ? '#ffffff' : '#1F2937' }}
    onClick={onClick}
  />
);