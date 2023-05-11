import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div>Footer </div> - <div> footer</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: rgb(1, 5, 33);
  color: white;
`;

export default Footer