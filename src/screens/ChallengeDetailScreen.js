import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Context as ChallengeContext } from '../context/challengeContext';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const ChallengeDetailScreen = ({ navigation }) => {
    const {state} = useContext(ChallengeContext);
    const _id = navigation.getParam('_id');
    
    const challenge = state.find(c => c._id === _id);
    const image = challenge.image;

    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={styles.challengeImage}>
                    <Image style={styles.image} source={{ uri: `${image}` }} />
                    
                </View>
                <View style={styles.challengeText}>
                    <Text style={{ fontSize: 35, fontWeight: '400'}}>{challenge.name}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10}}>{challenge.description}</Text>
                    <CheckBox
                        style={styles.checkBox}
                        title="Mark Completed"
                        containerStyle={{marginTop: 20, backgroundColor: '#66b8af', borderRadius: 30}}
                        center={true}
                        textStyle={{color:'white'}}
                        uncheckedColor='white'
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', padding: 15, marginHorizontal: 10, marginLeft: 0, marginTop: 20}}>
                <View style={{backgroundColor: '#66b8af', height: 170, width: '50%', alignItems:'center', justifyContent:'center', borderRadius: 30, marginRight: 10}}>
                    <Text style={{fontSize: 22, padding: 12, marginTop: -10, textAlign: 'center', fontWeight: '200', color: '#fff'}}>Carbon saving</Text>
                    <Text style={{fontSize: 22, color:'#fff', fontWeight: '200'}}>{challenge.carbon} kg</Text>
                    <MaterialIcons name="directions-car" size={43} color="#fff"/>
                </View>
                <View style={{backgroundColor: '#66b8af', height: 170, width: '50%', alignItems:'center', justifyContent:'center', borderRadius: 30}}>
                    <Text style={{fontSize: 22, padding: 12, textAlign: 'center', fontWeight: '200', color: 'white'}}>Water saving</Text>
                    <Text style={{fontSize: 22, color:'#fff', fontWeight: '200'}}>{challenge.water} L</Text>
                    <MaterialCommunityIcons name="water" size={43} color="#fff"/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    challengeImage: {
            width: '100%',
            height: 220,
            overflow: 'hidden',
            justifyContent: 'center',
            opacity: 0.5,
        },
        image: {
            flex: 1,
            width: undefined,
            height: undefined
        },
        challengeText: {
            padding: 20,
            borderRadius: 25,
            backgroundColor: '#fff',
            marginTop: -20
        },
        checkBox: {
            marginTop: 20
        }
});

export default ChallengeDetailScreen;