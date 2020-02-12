// import '../_mockLocation';
import React, {useEffect, useState, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';

const EventScreen = () => {
    const [err, setErr] = useState(null);
    const { addLocation } = useContext(LocationContext);

    const Location = async () => {
       try {
         await requestPermissionsAsync();
         await watchPositionAsync({
             accuracy: Accuracy.Balanced,
             timeInterval: 1000,
             distanceInterval: 10
         }, (location) => { 
            addLocation(location);
         });
       } catch (e) {
        setErr(e);
       }
    };

    useEffect(() => {
        Location();
    }, []);

    return (
        <SafeAreaView forceInset={{top:'always'}}>
        <Text h3>Find an Event</Text>
        <Map />
        {err ? <Text> Please enable location services to see events near you!</Text> : null}
        </SafeAreaView>
        );
};

EventScreen.navigationOptions = {
    tabBarIcon: <Feather name="map-pin" size={20} />
}

const styles = StyleSheet.create({});

export default EventScreen;