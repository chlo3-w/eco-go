import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';

const HelpScreen = () => {
    return (
        <>
        <View style={{flex:1}}>
                <View style={styles.faqImage}>
                    <Image style={styles.image} source={require('../../assets/faq.jpg')}/>
                </View>
                <ScrollView style={styles.helpText}>
                    <Text h1 style={styles.textStyle}>FAQs</Text>
                    <Spacer />
                    <Text h5 style={styles.bodyStyle}>What is eco:go?</Text>
                    <Text h5 style={styles.answerStyle}>Eco:go is a personal sustainability mobile application that challenges, rewards and educates users on how they can reduce their environmental impact. The app centres around creating a personalised experience for the user, giving them achievable, realistic and habit-forming eco-challenges; displaying relevant blog posts tailored to their interests and promoting local events to them ran by organisations who want to tackle climate change. </Text>
                    <Spacer />
                    <Text h5 style={styles.bodyStyle}>What is the aim of this application?</Text>
                    <Text h5 style={styles.answerStyle}>The application aim is to encourage sustainable living and positive environmental impact through tailored, habit-forming eco-challenges, education and citizen engagement.</Text>
                    <Spacer />
                    <Text h5 style={styles.bodyStyle}>How do you manage user data?</Text>
                    <Text h5 style={styles.answerStyle}>Eco:go is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. If you have any questions relating to this topic, please get in touch and we'd be happy to help.</Text>
                    <Spacer />
                    <Text h5 style={styles.bodyStyle}>How can I get in touch?</Text>
                    <Text h5 style={styles.answerStyle}>You can get in touch via email at help@eco-go.com or via any of our social media channels (Facebook, Instagram and Twitter).</Text>
                </ScrollView>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        paddingLeft: 15
    },
    bodyStyle: {
        fontSize: 20,
        paddingLeft: 15,
    },
    answerStyle: {
        paddingTop: 10,
        paddingLeft: 15,
        fontWeight: '200'
    },
    faqImage: {
        width: '100%',
        height: 260,
        overflow: 'hidden',
        justifyContent: 'center',
        opacity: 0.5,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    helpText: {
        padding: 20,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: -20
    }
});

export default HelpScreen;