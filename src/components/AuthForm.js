import React, { useState }from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from './Spacer';

// USER SIGNIN/SIGNOUT FORM
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text style={styles.text}>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input 
                label="Email:" 
                labelStyle={styles.label}
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='email@address.com'
                placeholderTextColor='#D8D8D8'
                inputContainerStyle={styles.input}
                leftIcon={
                    <Icon
                        name='user'
                        size={18}
                        color='#D8D8D8'
                        style={styles.icon}
                    />
                }
            />
            <Spacer />
            <Input 
                label="Password:" 
                labelStyle={styles.label}
                value={password} 
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                placeholder='●●●●●●●●'
                placeholderTextColor='#D8D8D8'
                inputContainerStyle={styles.input}
                leftIcon={
                    <Icon
                        name='lock'
                        size={18}
                        color='#D8D8D8'
                        style={styles.icon}
                    />
                }
            />
            <Spacer>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer />
            <Button 
                buttonStyle={styles.button1}
                title={submitButtonText}
                onPress={() => onSubmit({email, password})}
            />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
    text: {
        fontSize: 35,
        color: '#fff'
    },
    input:{
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
    },
    label: {
        color: '#fff',
        padding: 5,
        letterSpacing: 0.3
    },
    icon: {
        paddingRight: 13
    },
    button1: {
        marginTop: -15,
        backgroundColor: '#e96d64',
        borderColor: '#e96d64',
        borderWidth: 5,
        borderRadius: 10,
    },
});

export default AuthForm;