// use this import to test location if mobile location not working -- import '../_mockLocation';
import React, {useEffect, useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
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
        <SafeAreaView forceInset={{top:'always'}} style={{ backgroundColor: '#66b8af', flex: 1}}>
            <View style={styles.header}>
                <Text style={{color: 'white'}} h3>Events</Text>
            </View>
            <Map />
            {err ? <Text> Please enable location services to see events near you!</Text> : null}
        </SafeAreaView>
    );
};

EventScreen.navigationOptions = {
    tabBarIcon: <Feather name="map-pin" size={20} />,
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#66b8af',
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 10,
    },
    container: {
            width: 240,
            borderRadius: 12,
            overflow: "hidden",
            marginHorizontal: 10,
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'gray',
            shadowOffset: { height: 0, width: 0 }
        },
});

export default EventScreen;