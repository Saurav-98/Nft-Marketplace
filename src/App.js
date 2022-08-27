import React from 'react';
import Home from './components/Home';

import styled from 'styled-components';

const Section = styled.section`
  margin: 1rem;
  background-color: #232835;
  border-radius: 1rem;
  height: 100vh;
`;

const App = () => {
  return (
    <Section>
      <Home />
    </Section>
  );
};

export default App;
