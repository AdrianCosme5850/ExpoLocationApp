import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationSpot from './components/location'


export default function App() {



  return (<>
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
          <LocationSpot/>
          </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
