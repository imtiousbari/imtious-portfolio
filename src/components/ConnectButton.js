import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const ConnectButton = ({ component }) => (
  <button onClick={() => console.log('connect')}>
    Let’s Connect 
    <ArrowRightCircle size={25} />
    {component}
  </button>
);

export default ConnectButton;