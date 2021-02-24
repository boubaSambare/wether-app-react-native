import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import  image from './image/meteo.jpg';
import  Home  from './screens/Home';
import {Provider} from 'react-redux';
import store from './store/store';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <PaperProvider>
      <View style={styles.background}>
          <ImageBackground source={image} style={styles.image}>
            <Home/>
          <StatusBar style="auto" />
          </ImageBackground>
    </View>
    </PaperProvider>
    </Provider>
      
    
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
