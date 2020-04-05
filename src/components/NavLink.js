import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';



const NavLink = ({navigation, text, routeName}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
            >
                <Text style={styles.link}>
                    {text}
                
                <Icon
                    name='chevron-right'
                    size={10}
                    color='#fff'
                />
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'white',
        marginHorizontal: 15,
        marginTop: 5
    }
});

export default withNavigation(NavLink);
