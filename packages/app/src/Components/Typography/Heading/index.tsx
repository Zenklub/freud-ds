import { Heading, IHeadingProps } from 'native-base';
import React from 'react';

export const ZHeading: React.FC<IHeadingProps> = ({ children, ...props }): JSX.Element => (
  <Heading {...props} fontFamily={'heading'}>
    {children}
  </Heading>
);
