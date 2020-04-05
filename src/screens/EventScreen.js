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
            {/* <View style={{ backgroundColor: 'white', flex: 1}}>
            <ScrollView horizontal={true} style={{position: 'absolute', marginTop: -170}}>
                <ListItem style={styles.container} title="Litter Pick" containerStyle={{ height: 100, marginBottom: 20, borderRadius: 12, borderColor:'lightgray', borderBottomWidth: 0.5, backgroundColor: '#e96d64'}} titleStyle={{ color: 'white', fontSize: 18}} subtitle='15th February, Sandbach' subtitleStyle={{color: 'white', fontSize: 13, paddingTop: 5, fontWeight:'200'}} leftAvatar={{size: 'medium', source:require('../../assets/earth2.png')}} onPress = {() => _mapView.animateToRegion({latitude: 53.1421234, longitude: -2.3868803}, 1000)} />
                <ListItem style={styles.container} title="Environmental Talk" containerStyle={{ height: 100, marginBottom: 20, borderRadius: 12, borderColor:'lightgray', borderBottomWidth: 0.5, backgroundColor: '#e96d64'}} titleStyle={{ color: 'white', fontSize: 18}} subtitle="20th February, Hyde" subtitleStyle={{color: 'white', fontSize: 13, paddingTop: 5, fontWeight:'200'}} leftAvatar={{size: 'medium', source:require('../../assets/earth2.png')}}/>
                <ListItem  style={styles.container} title="Climate Change Meetup" containerStyle={{ height: 100, marginBottom: 20, borderRadius: 12, borderColor:'lightgray', borderBottomWidth: 0.5, backgroundColor: '#e96d64'}} titleStyle={{ color: 'white', fontSize: 18}} subtitle="31st February, Littleborough" subtitleStyle={{color: 'white', fontSize: 13, paddingTop: 5, fontWeight:'200'}} leftAvatar={{size: 'medium', source:require('../../assets/earth2.png')}}/>
            </ScrollView>
            </View> */}
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