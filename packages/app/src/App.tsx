import { Center, NativeBaseProvider, ScrollView } from 'native-base';
import React from 'react';
import { FreudHeading, FreudText } from './Components';
import { theme } from './Theme';

const App: React.FC = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <Center
          style={{
            flex: 1,
            marginVertical: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FreudHeading>Default Heading</FreudHeading>
          <FreudText>Default Text</FreudText>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;

/// Making components avaliable
export * from './Components';
