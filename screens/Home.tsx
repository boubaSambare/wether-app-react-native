import  React,{useState,useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import * as Location from 'expo-location';

export interface HomeProps {
}

export default function Home (props: HomeProps) {
  const [location, setLocation] = useState<null | {}>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
    return (
      <View style={styles.container}>
         <Text>Home {text}</Text>

      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
