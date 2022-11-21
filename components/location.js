import { useState, useEffect } from 'react';
import { Text, View, Button} from 'react-native';
import * as Location from 'expo-location';

function LocationSpot() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      (async () => {
      await Location.requestForegroundPermissionsAsync();
      })();
    }, []);

    let getLocation = async () => {
      let position = Location.getCurrentPositionAsync({});

      setLocation(JSON.stringify(position))
    }

    return (<View>
      <Text>{location}</Text>
      <Button
      title='Location'
      onPress={ () => console.log(location)}
      />
            <Button
      title='Set Location'
      onPress={getLocation}
      />
    </View>)

}

export default LocationSpot;