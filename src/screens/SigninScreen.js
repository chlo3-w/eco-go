import React, {useContext} from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/authContext';
import Spacer from '../components/Spacer';

const SigninScreen = ({ navigation }) => {
    const {state, signin, clearErrorMessage} = useContext(Context);

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
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <AuthForm 
                            headerText="Sign in to your account"
                            errorMessage={state.errorMessage}
                            submitButtonText="Sign In"
                            onSubmit={signin}
                        />
                        <NavLink 
                            routeName="Signup"
                            text="Don't have an account? Click here to sign up  "
                        />
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAwareScrollView> 
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    textBox: {
        marginBottom: 50,
        padding: 10,
        borderRadius: 400,
        paddingTop: 50,
    },
});

export default SigninScreen;