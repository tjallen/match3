import React from 'react';
import BoardContainer from './BoardContainer';
import Title from './Title';
import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
`;

const App = () => (
  <div>
    <StyledAppWrapper>
      <Title />
      <BoardContainer />
    </StyledAppWrapper>
  </div>
);

export default App;