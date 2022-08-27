import React from 'react';
import styled from 'styled-components';

const Button = ({ text, blue = true }) => {
  return (
    <Btn>
      <button className={`${blue ? 'blue' : ''}`}>{text}</button>
    </Btn>
  );
};

export default Button;

const Btn = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    border: none;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;

    :not(.blue) {
      background-color: transparent;
      border: 1px solid white;
    }
  }

  .blue {
    background-color: #2d69fd;
  }
`;
