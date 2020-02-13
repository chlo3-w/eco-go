import React, {useContext} from 'react';
import { Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import MapView, { Marker, Circle }  from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: { currentLocation } } = useContext(LocationContext);
    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200}}/>;
    }

    return (
        <MapView 
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        }}>
            <Circle
            center={currentLocation.coords}
            radius={200}
            strokeColor="rgba(158,158,255, 1.0)"
            fillColor="rgba(158, 158, 255, 0.3)"
            />
            <MapView.Marker
                coordinate={currentLocation.coords}
                pinColor='green'
                title={"Your location"}
            >
            <Image style={styles.earthMarker} source={require('../../assets/user-marker.png')}/>
            </MapView.Marker>
            <MapView.Marker
                coordinate={{
                    latitude: 53.4539748,
                    longitude: -2.0595142,
                }}
                title={"Environmental Talk"}
                pinColor='green'
                description={"20th February 2020"}
            >
             <Image style={styles.earthMarker} source={require('../../assets/earth-marker2.png')}/>
             </MapView.Marker>
            <MapView.Marker
                coordinate={{
                    latitude: 53.1421234,
                    longitude: -2.3868803,
                }}
                title={"Litter Pick"}
                pinColor='green'
                description={"15th February 2020"}
            >
            <Image style={styles.earthMarker} source={require('../../assets/earth-marker2.png')}/>
            </MapView.Marker>
            <MapView.Marker
                coordinate={{
                    latitude: 53.6471418,
                    longitude: -2.0595142,
                }}
                title={"Climate Change Meetup"}
                pinColor='green'
                description={"31st February 2020"}
            >
            <Image style={styles.earthMarker} source={require('../../assets/earth-marker2.png')}/>
            </MapView.Marker>
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: '100%'
    },
    earthMarker: {
        height: 45, 
        width: 45, 
        shadowOpacity: 0.5, 
        shadowRadius: 3, 
        shadowColor: 'gray', 
        shadowOffset: { height: 0, width: 0 }
    }
});

export default withNavigation(Map);