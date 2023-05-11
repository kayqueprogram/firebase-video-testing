import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <div>Footer</div> - <div>footer</div>
      <Button onClick={handleClick}>
       ^
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: rgb(1, 5, 33);
  color: white;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  color: white;
`;

export default Footer;
