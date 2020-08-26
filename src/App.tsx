import 'react-native-gesture-handler';

import React from 'react';

import { useFonts as useRoboto, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts as useUbuntu, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';

const App: React.FC = () => {
  const [robotoLoaded] = useRoboto({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const [ubuntuLoaded] = useUbuntu({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!robotoLoaded || !ubuntuLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
