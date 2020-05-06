import React, {useContext} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import MapView, { Marker, Circle }  from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: { currentLocation } } = useContext(LocationContext);
    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200}}/>;
    }

    return (
        <>
        <MapView 
        ref = {(mapView) => { _mapView = mapView; }}
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
                    latitude: 53.4789339,
                    longitude: -2.2486066,
                }}
                title={"Environmental Talk"}
                pinColor='green'
                description={"29th July 2020"}
            >
             <Image style={styles.earthMarker} source={require('../../assets/earth-marker2.png')}/>
             </MapView.Marker>
            <MapView.Marker
                coordinate={{
                    latitude: 53.3104672,
                    longitude: -3.8136738,
                }}
                title={"Litter Pick"}
                pinColor='green'
                description={"14th July 2020"}
            >
            <Image style={styles.earthMarker} source={require('../../assets/earth-marker2.png')}/>
            </MapView.Marker>
            <MapView.Marker
                key={2}
                coordinate={{
                    latitude: 53.6471418,
                    longitude: -2.0595142,
                }}
                title={"Climate Change Meetup"}
                pinColor='green'
                description={"12th September 2020"}
            >
            <Image style={styles.earthMarker} source={require('../../assets/earth-marker2.png')}/>
            </MapView.Marker>
        </MapView>
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'flex-end'}}>
            <ScrollView horizontal={true} style={{ marginTop: -170}}>
                <ListItem underlayColor="transparent" style={styles.container} title="Litter Pick Event" containerStyle={{ height: 100, marginBottom: 20, borderRadius: 12, borderColor:'lightgray', borderBottomWidth: 0.5, backgroundColor: '#e96d64'}} titleStyle={{ color: 'white', fontSize: 17}} subtitle='14th July, Colwyn Bay' subtitleStyle={{color: 'white', fontSize: 15, paddingTop: 5, fontWeight:'200'}} leftAvatar={{size: 'medium', source:require('../../assets/earth2.png')}} onPress = {() => _mapView.animateToRegion({latitude: 53.3104672, longitude: -3.8136738}, 1000)} />
                <ListItem underlayColor="transparent" style={styles.container} title="Environmental Talk" containerStyle={{ height: 100, marginBottom: 20, borderRadius: 12, borderColor:'lightgray', borderBottomWidth: 0.5, backgroundColor: '#e96d64'}} titleStyle={{ color: 'white', fontSize: 17}} subtitle="29th July, Manchester Town Hall" subtitleStyle={{color: 'white', fontSize: 15, paddingTop: 5, fontWeight:'200'}} leftAvatar={{size: 'medium', source:require('../../assets/earth2.png')}} onPress = {() => _mapView.animateToRegion({latitude: 53.4789339, longitude: -2.2486066}, 1000)}/>
                <ListItem underlayColor="transparent" style={styles.container} title="Climate Protest" containerStyle={{ height: 100, marginBottom: 20, borderRadius: 12, borderColor:'lightgray', borderBottomWidth: 0.5, backgroundColor: '#e96d64'}} titleStyle={{ color: 'white', fontSize: 17}} subtitle="12th September, Littleborough" subtitleStyle={{color: 'white', fontSize: 15, paddingTop: 5, fontWeight:'200'}} leftAvatar={{size: 'medium', source:require('../../assets/earth2.png')}} onPress = {() => _mapView.animateToRegion({latitude: 53.6471418, longitude: -2.0595142}, 1000)}/>
            </ScrollView>
        </View>
        </>
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

export default withNavigation(Map);