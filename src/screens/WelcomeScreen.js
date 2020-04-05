import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/signin-bg.png')} style={styles.container}>
        <View style={styles.headerText}>
            <Text style={{ fontSize: 78, color: '#fff'}}>eco:go</Text>
            <Spacer />
            <Text style={{ fontSize: 28, color: '#fff'}}>Your sustainable future starts <Text style={{ textDecorationLine: 'underline'}}>right now.</Text></Text>
            <Spacer />
            </View>
            <View style={styles.options}>
                <Button 
                    buttonStyle={styles.button1}
                    title="Get Started"
                    onPress={() => navigation.navigate('Signup')}
                />
                {/* <Spacer /> */}
                <Button 
                    buttonStyle={styles.button2}
                    title="Sign in"
                    titleStyle={{color: '#22796f'}}
                    onPress={() => navigation.navigate('Signin')}
                />
            </View>
        </ImageBackground>
    );
};

WelcomeScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        // marginTop: 250,
        // // marginHorizontal: 25,
        // position: 'absolute'
    },
    options: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        alignSelf: 'center',
        width: '82%',
    },
    headerText: {
        flex: 1,
        marginTop: 280,
        marginHorizontal: 25,
    },
    button1: {
        backgroundColor: '#e96d64',
        borderColor: '#e96d64',
        borderWidth: 5,
        borderRadius: 10,
        marginBottom: 15
    },
    button2: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
    }

});

export default WelcomeScreen;