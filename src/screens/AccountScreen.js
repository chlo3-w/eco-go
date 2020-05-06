import React, {useContext} from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import SwitchToggle from '../components/Switch';
import { Context as authContext } from '../context/authContext';



const AccountScreen = ({ navigation }) => {
    const {signout} = useContext(authContext);
    const {fetchEmail} = useContext(authContext);

    return (
        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <ImageBackground source={require('../../assets/settings-bg.png')} style={styles.backgroundImage}>
                <NavigationEvents onWillFocus={fetchEmail}/>
                <View style={styles.titleBar}>
                        <TouchableOpacity>
                            <View>
                                <Ionicons style={styles.back} underlayColor="#ffffff00" name="ios-arrow-back" size={24} color="#FEFEFE" onPress={() => navigation.navigate('ChallengeList')}/>
                            </View>
                        </TouchableOpacity>
                    </View>    
                    <Text h3 style={styles.headerStyle}>Settings</Text>
                    <View style={styles.textContainer}>
                        <Text h5 style={styles.textStyle}>Personal Details</Text>
                        <View style={styles.hairline} />
                        <Text h5 style={styles.bodyStyle}>Name</Text>
                        <View style={styles.hairline} />
                        <Text h5 style={styles.bodyStyle}>Email</Text>
                        <View style={styles.hairline} />
                    </View>
                    <View style={styles.horizontalBar}>
                        <View style={styles.leftText}>
                            <Text h5 style={styles.textStyle}>Notifications</Text>
                        </View>
                        <View style={styles.rightSwitch}>
                            <SwitchToggle />
                        </View>  
                    </View>
                    <View style={styles.horizontalBar}>
                        <View style={styles.leftText}>
                            <Text h5 style={styles.textStyle}>Language</Text>
                        </View>
                        <View style={styles.rightText}>
                            <Text h5 style={styles.subtextStyle}>English</Text>
                        </View>  
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                        <View style={styles.horizontalBar}>
                            <View style={styles.horizontalText}>
                                <Text h5 style={styles.textStyle}>Help</Text>
                            </View>
                            <View style={styles.horizontalIcon}>
                                <Ionicons style={styles.settings} underlayColor="#ffffff00" name="ios-arrow-forward" size={24} color="#FEFEFE" onPress={() => navigation.navigate('Help')}/>
                            </View>  
                        </View>
                    </TouchableOpacity>
                <Spacer />
                <Spacer>
                    <Text style={{ fontSize: 35, fontWeight: '400'}}></Text>
                    <Button 
                        buttonStyle={styles.button1}
                        title="Sign Out"
                        onPress={signout}
                    />
                </Spacer>
            </ImageBackground>
        </SafeAreaView>
    )
};

AccountScreen.navigationOptions = {
    header:null,
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        paddingLeft: 15
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        backgroundColor: '#66b8af',
        justifyContent: 'center'
    },
    headerStyle: {
        color: 'white',
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 10,
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginHorizontal: 16,
        backgroundColor: 'transparent'
    },
    back: {
        backgroundColor: 'transparent',
        padding: 5,
    },
    textContainer: {
        marginTop: 100
    },
    textStyle: {
        marginTop: 30,
        paddingLeft: 15,
        fontWeight: '600',
        fontSize: 18,
        color: 'white',
    },
    bodyStyle: {
        fontSize: 16,
        paddingLeft: 15,
        paddingTop: 20,
        color: 'white',
    },
    hairline: {
        backgroundColor: '#FEFEFE',
        marginTop: 20,
        height: 0.8,
        width: '100%',
        alignSelf: 'center'
      },
    detailsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginHorizontal: 16,
        backgroundColor: 'transparent'
    },
    button1: {
        marginTop: -15,
        backgroundColor: '#e96d64',
        borderColor: '#e96d64',
        borderWidth: 5,
        borderRadius: 10,
    },
    horizontalBar: {
        backgroundColor: 'transparent',
        flexDirection:'row', 
        marginHorizontal: 10, 
        marginLeft: 0, 
    },
    settings: {
        backgroundColor: 'transparent',
        marginRight: 15
    },
    horizontalText: {
        width: '88%', 
        justifyContent:'center', 
        marginRight: 10
    },
    horizontalIcon: {
        width: '12%', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop: 30
    },
    leftText:{
        width: '60%', 
        justifyContent:'center', 
        marginRight: 20
    },
    rightText:{ 
        width: '40%', 
        alignItems:'center', 
        justifyContent:'center', 
    },
    rightSwitch: {
        width: '40%', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop: 30,
        marginLeft: 15
    },
    subtextStyle: {
        marginTop: 30,
        paddingLeft: 15,
        fontWeight: '300',
        fontSize: 18,
        color: 'white',
    },

});

export default AccountScreen;