import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 78}}>eco:go</Text>
            <Spacer />
            <Text style={{ fontSize: 28}}>Your sustainable future starts <Text style={{ textDecorationLine: 'underline'}}>right now.</Text></Text>
            <Spacer />
            <View style={styles.options}>
                <Button 
                    title="Get Started"
                    onPress={() => navigation.navigate('Signup')}
                />
                <Spacer />
                <Button 
                    title="Sign in"
                    onPress={() => navigation.navigate('Signin')}
                />
            </View>
        </View>
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
        marginTop: 250,
        marginHorizontal: 25
    },
    options: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});

export default WelcomeScreen;