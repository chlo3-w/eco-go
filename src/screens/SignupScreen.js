import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Context as authContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(authContext);

    return (
        <KeyboardAwareScrollView
        style={{ backgroundColor: '#22796f' }}
        style={styles.box}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
        <ImageBackground source={require('../../assets/signin-bg1.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
        <View style={styles.textBox}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm 
                headerText="Sign up to eco:go"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink 
                routeName="Signin"
                text="Already have an account? Click here to sign in  "
            />
        </View>
        </View>
        </ImageBackground>
        </KeyboardAwareScrollView>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        // marginTop: 250,
        // // marginHorizontal: 25,
        // position: 'absolute'
    },
    textBox: {
        marginBottom: 50,
        padding: 10,
        borderRadius: 400,
        paddingTop: 350,
    },
});

export default SignupScreen;