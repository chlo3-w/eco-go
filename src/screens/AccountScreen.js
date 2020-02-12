import React, {useContext} from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as authContext } from '../context/authContext';

const AccountScreen = () => {
    const {signout} = useContext(authContext);
    const {fetchEmail} = useContext(authContext);
    console.log(fetchEmail);

    return (
        <SafeAreaView forceInset={{top:'always'}}>
        <NavigationEvents onWillFocus={fetchEmail}/>
        <Text></Text>
        <Spacer>
        <Button 
            title="Sign Out"
            onPress={signout}
        />
        </Spacer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default AccountScreen;