import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { CheckBox } from 'react-native-elements';
import { Context as ChallengeContext } from '../context/challengeContext';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const ChallengeDetailScreen = ({ navigation }) => {
    //FETCH CHALLENGE DETAILS
    const {state} = useContext(ChallengeContext);
    const _id = navigation.getParam('_id');
    const challenge = state.find(c => c._id === _id);
    const image = challenge.image;

    //MARK COMPLETE
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <View style={styles.top}>
                <Image source={{ uri: `${image}` }} style={styles.Image}/>
            </View>
            <View style={styles.titleBar}>
                <TouchableOpacity>
                    <View>
                        <Ionicons style={styles.back} underlayColor="#ffffff00" name="ios-arrow-back" size={24} color="#FEFEFE" onPress={() => navigation.navigate('ChallengeList')}/>
                    </View>
                </TouchableOpacity>
            </View>     
            <View style={styles.text}>
                <Text style={styles.headerText}>{challenge.name}</Text>
                <Text style={styles.subText}>Weekly Challenge</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.impactContainer}>
                    <View style={{flexDirection:'row', padding: 15, marginHorizontal: 10, marginLeft: -12, marginTop: 10}}>
                        <View style={styles.impactLeft}>
                            <Text style={styles.impactSub}>{challenge.carbon} kg</Text>
                            <MaterialIcons name="directions-car" size={35} color="#22796F"/>
                            <Text style={styles.impactHead}>Carbon saving</Text>
                        </View>
                        <View style={styles.impactRight}>
                            <Text style={styles.impactSub}>{challenge.water} L</Text>
                            <MaterialCommunityIcons name="water" size={35} color="#22796F"/>
                            <Text style={styles.impactHead}>Water  saving</Text>
                        </View>
                        <Text style={styles.middleText}> OR </Text>
                        <View style={styles.impactLeft}>
                            <Text style={styles.impactSub}>{challenge.trees}</Text>
                            <MaterialCommunityIcons name="flower" size={35} color="#22796F"/>
                            <Text style={styles.impactHead}>Trees Planted</Text>
                        </View>
                        <View style={styles.impactRight}>
                            <Text style={styles.impactSub}>{challenge.bottles}</Text>
                            <MaterialCommunityIcons name="cup-water" size={35} color="#22796F"/>
                            <Text style={styles.impactHead}>Water Bottles</Text>
                        </View>
                    </View>
                </ScrollView> 
                <Text style={styles.impactText}>Yearly Impact</Text>
                <Text style={styles.subText}>{challenge.description}</Text>
                <CheckBox
                    style={styles.button1}
                    title="Mark Completed"
                    containerStyle={{marginTop: 20, backgroundColor: '#E96D64', borderRadius: 10, borderWidth: 0}}
                    center={true}
                    textStyle={{color:'white'}}
                    uncheckedColor='white'
                    checkedColor='white'
                    borderColor='#E96D64'
                    iconRight
                    onPress={toggleSwitch}
                    checked={isEnabled}
                />
            </View>
        </SafeAreaView>
    );
};

ChallengeDetailScreen.navigationOptions = {
    header:null
  };

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#66b8af',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        top: {
            flexDirection: 'row',
            width: '114%',
            height: 280,
            borderRadius: 25,
            marginLeft: -18,
            marginTop: -45,
        },
        titleBar: {
            position: 'absolute',
            marginTop: 50,
            paddingLeft: 15,
            width: '100%',
    },
    back: {
        backgroundColor: 'transparent',
        padding: 5,
    },
   Image: {
       alignSelf: 'center',     
       width: 410,
       height: 350,
       borderRadius: 40,
       opacity: 0.5,
   },
   text: {
        alignSelf: 'flex-end',
        width: '100%',
        position: 'absolute',
        marginTop: 5,
        paddingBottom: 20,
        paddingHorizontal: 10
    },
    headerText: {
        fontSize: 32, 
        fontWeight: '400',
        color: 'white',
    },
    subText: {
        fontSize: 16, 
        fontWeight: '300',
        color: 'white',
    },
    impactContainer: {
        marginTop: -15,
        width: '105%'
    },
    impactLeft: {
        height: 140, 
        width: '22%', 
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius: 15, 
        marginRight: 10,
        backgroundColor: 'white',
    },
    impactRight: {
        height: 140, 
        width: '22%', 
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius: 15,
        backgroundColor: 'white',
    },
    impactHead: {
        fontSize: 14, 
        padding: 12, 
        marginTop: -5, 
        textAlign: 'center', 
        color: '#22796F'
    },
    middleText: {
        color: '#fff',
        marginTop: 65,
        marginLeft: 5,
        marginRight: 5
    },
    impactSub: {
        fontSize: 20, 
        color:'#22796F', 
        marginTop: 5,
        marginBottom: 5
    },
    button1: {
        backgroundColor: '#e96d64',
        borderColor: '#E96D64',
        borderWidth: 5,
        borderRadius: 10,
    },
    impactText: {
        marginTop: -12,
        paddingLeft: 0,
        paddingBottom: 10,
        color: 'white'
    }
});

export default ChallengeDetailScreen;
