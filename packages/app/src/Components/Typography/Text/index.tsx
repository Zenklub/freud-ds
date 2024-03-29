import { ITextProps, Text } from 'native-base';
import React from 'react';

export const FreudText: React.FC<ITextProps> = ({ children, ...props }): JSX.Element => (
  <Text {...props}>{children}</Text>
);
