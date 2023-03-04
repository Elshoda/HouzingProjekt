import React from 'react';
import { Container, ImageError } from './style';

const Error = () => {
  return (
    <Container>
      <ImageError>404</ImageError>
      <h1>Not found</h1>
    </Container>
  );
}

export default Error;
