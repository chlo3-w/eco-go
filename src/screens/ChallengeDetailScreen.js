import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Context as ChallengeContext } from '../context/challengeContext';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const ChallengeDetailScreen = ({ navigation }) => {
    const {state} = useContext(ChallengeContext);
    const _id = navigation.getParam('_id');
    
    const challenge = state.find(c => c._id === _id);

    return (
    <View style={{flex:1}}>
    <View style={{flex:1}}>
    <View style={styles.challengeImage}>
    <Image style={styles.image} source={require('../../assets/meatfree.jpg')}/>
    </View>
    <View style={styles.challengeText}>
     <Text style={{ fontSize: 40, fontWeight: '400'}}>{challenge.name}</Text>
     <Text style={{ fontSize: 16, marginTop: 10}}>{challenge.description}</Text>
     </View>
     </View>

      <View style={{flexDirection:'row', padding: 15, marginHorizontal: 10, marginLeft: 0, marginTop: 20}}>
    <View style={{backgroundColor: 'lightgray', height: 170, width: '50%', alignItems:'center', justifyContent:'center', borderRadius: 30, marginRight: 10}}>
    <Text style={{fontSize: 22, padding: 12, textAlign: 'center', fontWeight: '200', color: '#52575D'}}>Carbon saving</Text>
    <Text style={{fontSize: 22, fontWeight: '200'}}>{challenge.carbon}</Text>
    <MaterialIcons name="directions-car" size={43} color="#52575D"/>
    </View>
    <View style={{backgroundColor: 'gray', height: 170, width: '50%', alignItems:'center', justifyContent:'center', borderRadius: 30}}>
    <Text style={{fontSize: 22, padding: 12, textAlign: 'center', fontWeight: '200', color: 'white'}}>Water saving</Text>
    <Text style={{fontSize: 22, fontWeight: '200'}}>{challenge.water}</Text>
    <MaterialCommunityIcons name="water" size={43} color="#fff"/>
    </View>
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    challengeImage: {
            width: '100%',
            height: 175,
            // borderRadius: 30,
            overflow: 'hidden',
            justifyContent: 'center',
            opacity: 0.5
        },
        image: {
            flex: 1,
            width: undefined,
            height: undefined
        },
        challengeText: {
            padding: 20
        }
});

export default ChallengeDetailScreen;