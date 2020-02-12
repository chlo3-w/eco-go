import React, {useContext} from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
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
    }}
    >
    <Circle
    center={currentLocation.coords}
    radius={200}
    strokeColor="rgba(158,158,255, 1.0)"
    fillColor="rgba(158, 158, 255, 0.3)"
    />
    <MapView.Marker
        coordinate={currentLocation.coords}
        pinColor='navy'
        title={"Your location"}
    />
    <MapView.Marker
        coordinate={{
            latitude: 53.4539748,
            longitude: -2.0595142,
        }}
        title={"Test Event"}
        pinColor='green'
        description={"Environmental Talk 20th February 2020"}
        />
    <MapView.Marker
        coordinate={{
            latitude: 53.1421234,
            longitude: -2.3868803,
        }}
        title={"Test Event 2"}
        pinColor='green'
        description={"Environmental Talk 20th February 2020"}
        />
    <MapView.Marker
        coordinate={{
            latitude: 53.6471418,
            longitude: -2.0595142,
        }}
        title={"Test Event 3"}
        pinColor='green'
        description={"Environmental Talk 20th February 2020"}
        />
    </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 600
    }
});

export default withNavigation(Map);