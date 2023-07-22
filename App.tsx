/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import ReactNativeRecoilPersist, { ReactNativeRecoilPersistGate } from 'react-native-recoil-persist';
import RootNavigation from './navigation/AppTap';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSetRecoilState } from 'recoil';
import { appStatus_atom } from 'recoils/userRecoils';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();
  const setAppAtom = useSetRecoilState(appStatus_atom)

  useEffect(() => {
    setAppAtom(appState => ({
      ...appState,
      top: insets.top,
      bottom: insets.bottom
    }))
  }, []);

  return (
    <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
      {/* <QueryClientProvider client={appClient}> */}
      {/* <NativeBaseProvider> */}
      {/* <MenuProvider> */}
      <RootNavigation />
      {/* <Loader />
          <FlashMessageCus />
          </MenuProvider> */}
      {/* </NativeBaseProvider> */}
      {/* </QueryClientProvider> */}
    </ReactNativeRecoilPersistGate>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
