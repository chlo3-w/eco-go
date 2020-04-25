import React, {useContext} from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Ionicons} from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { Context as authContext } from '../context/authContext';



const AccountScreen = ({ navigation }) => {
    const {signout} = useContext(authContext);
    const {fetchEmail} = useContext(authContext);
    // console.log({fetchEmail});

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
                    <Text h5 style={styles.textStyle}>Notifications</Text>
                    <Text h5 style={styles.textStyle}>Language</Text>
                    <Text h5 style={styles.textStyle}>Help</Text>
                </View>



            <Text style={styles.textStyle}>Sign Out</Text>
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
});

export default AccountScreen;