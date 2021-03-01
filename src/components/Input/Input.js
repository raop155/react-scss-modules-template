import React from 'react';

const Button = ({ ...rest }) => {

  return (
    <>
      <input {...rest} />
    </>
  );
};

export default Button;