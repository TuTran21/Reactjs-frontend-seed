import React from 'react';

const OnlyBody = Component => props => (
  <>
    <Component {...props} />
  </>
);

export default OnlyBody;
