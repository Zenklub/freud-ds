import { Center, NativeBaseProvider, ScrollView } from 'native-base';
import React from 'react';
import { theme } from './Theme';

import { ZHeading, ZText } from './Components';

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
          <ZHeading>ZHeading Default</ZHeading>
          <ZHeading size={'xs'}>Size xs</ZHeading>
          <ZHeading size={'sm'}>Size sm</ZHeading>
          <ZHeading size={'md'}>Size md</ZHeading>
          <ZHeading size={'lg'}>Size lg</ZHeading>
          <ZHeading size={'xl'}>Size xl</ZHeading>
          <ZHeading size={'2xl'}>Size 2xl</ZHeading>
          <ZHeading size={'3xl'}>Size 3xl</ZHeading>
          <ZHeading size={'4xl'}>Size 4xl</ZHeading>

          <ZText>Text Medium Default</ZText>
          <ZText size={'xs'}>Size xs</ZText>
          <ZText size={'sm'}>Size sm</ZText>
          <ZText size={'md'}>Size md</ZText>
          <ZText size={'lg'}>Size lg</ZText>
          <ZText size={'xl'}>Size xl</ZText>
          <ZText size={'2xl'}>Size 2xl</ZText>
          <ZText size={'3xl'}>Size 3xl</ZText>
          <ZText size={'4xl'}>Size 4xl</ZText>
          <ZText size={'5xl'}>Size 4xl</ZText>
          <ZText size={'6xl'}>Size 4xl</ZText>

          <ZText>ZText Regular Default</ZText>
          <ZText size={'xs'} fontWeight={theme.fontWeights.regular}>
            Size xs
          </ZText>
          <ZText size={'sm'} fontWeight={theme.fontWeights.regular}>
            Size sm
          </ZText>
          <ZText size={'md'} fontWeight={theme.fontWeights.regular}>
            Size md
          </ZText>
          <ZText size={'lg'} fontWeight={theme.fontWeights.regular}>
            Size lg
          </ZText>
          <ZText size={'xl'} fontWeight={theme.fontWeights.regular}>
            Size xl
          </ZText>
          <ZText size={'2xl'} fontWeight={theme.fontWeights.regular}>
            Size 2xl
          </ZText>
          <ZText size={'3xl'} fontWeight={theme.fontWeights.regular}>
            Size 3xl
          </ZText>
          <ZText size={'4xl'} fontWeight={theme.fontWeights.regular}>
            Size 4xl
          </ZText>
          <ZText size={'5xl'} fontWeight={theme.fontWeights.regular}>
            Size 4xl
          </ZText>
          <ZText size={'6xl'} fontWeight={theme.fontWeights.regular}>
            Size 4xl
          </ZText>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;

/// Making components avaliable
export * from './Components';
