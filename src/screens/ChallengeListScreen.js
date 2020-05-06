import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as ChallengeContext } from '../context/challengeContext';
import Chart from '../components/Chart';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';


const ChallengeListScreen = ({ navigation }) => {
    //FETCH CHALLENGES
    const { state, fetchChallenges } = useContext(ChallengeContext);  

    return (
    <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
        <NavigationEvents onWillFocus={fetchChallenges}/>
        <ImageBackground source={require('../../assets/home-bg4.png')} style={styles.backgroundImage}>
            <View style={styles.titleBar}>
                <TouchableOpacity>
                    <View>
                        <Ionicons style={styles.help} underlayColor="#ffffff00" name="ios-help" size={43} color="#FEFEFE" onPress={() => navigation.navigate('Help')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.titleBar}>
                        <Ionicons style={styles.settings} underlayColor="#ffffff00" name="ios-settings" size={24} color="#FEFEFE" onPress={() => navigation.navigate('Account')}/>
                    </View>
                </TouchableOpacity>
            </View>    
            <View style={{alignSelf: 'center', marginLeft: 55}}>
                <View style={styles.profileImage}>
                    <Image source={require('../../assets/avatar2.png')} style={styles.image} resizeMode="center"/>
                </View>
            </View>
            <View style={styles.logoImage}>
                <Image source={require('../../assets/logo2.png')} style={styles.logo} resizeMode="center"/>
            </View>
            <Text h5 style={styles.textStyleHead}>Overview</Text>
            <View style={styles.hairline} />
            <Spacer />
            <View style={{ flex: 1 }}>
                <Text h5 style={{marginTop: -20, padding:10, paddingLeft: 15, fontWeight: '400', color: '#FEFEFE'}}>Weekly Challenges</Text>
                <FlatList
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    data={state}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => {
                        return <TouchableOpacity onPress={() => navigation.navigate('ChallengeDetail', {_id: item._id})}>
                            <ListItem 
                            onPress={() => navigation.navigate('ChallengeDetail', {_id: item._id})}
                            containerStyle={{backgroundColor: '#e96d64', height: 70}}
                            style={styles.challengeContainer} chevron title={item.name}
                            titleStyle={{ color: 'white', fontWeight: 'bold' }}
                            chevron={{ color: 'white' }} 
                            />
                        </TouchableOpacity>
                    }}
                />
            </View>
            <View style={{ flex: 1, marginTop: -110 }}>
                <Text h5 style={{padding:10, paddingLeft: 15, fontWeight: '400', textAlign: 'center', color: '#FEFEFE'}}>Track your impact</Text>
                    <View style={styles.chart}>
                        <Chart />
                    </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Survey')}>
                    <View>
                    <ListItem 
                        containerStyle={{backgroundColor: '#66b8af'}}
                        chevron title="Take survey for personalised app experience"
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}
                        chevron={{ color: 'white' }} 
                    />
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </SafeAreaView>
    )
};

ChallengeListScreen.navigationOptions = {
    header:null
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b8af',
        justifyContent: 'center'
    },
    textStyleTitle: {
        textAlign: 'center',
        color: '#FEFEFE',
        fontSize: 24,
    },
    textStyleBrand: {
        textAlign: 'center',
        color: '#FEFEFE',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    textStyleHead: {
        textAlign: 'center',
        marginTop: 30,
        color: '#FEFEFE'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    logo: {
        flex: 1,
        width: undefined,
        height: undefined,
        marginTop: 12
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginHorizontal: 16,
        backgroundColor: 'transparent'
    },
    help: {
        backgroundColor: 'transparent',
        padding: 5,
        marginTop: -10
    },
    settings: {
        backgroundColor: 'transparent',
        padding: 5,
        marginRight: -18
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 500,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    logoImage: {
        width: '100%',
        height: 70,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    challengeContainer: {
        width: 240,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
        backgroundColor: 'red',
    },
    chart: {
        width: '90%',
        height: 150,
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: '#e96d64',
        alignSelf: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    hairline: {
        backgroundColor: '#FEFEFE',
        marginTop: 5,
        height: 1.5,
        width: 20,
        alignSelf: 'center'
      },
});

export default ChallengeListScreen;