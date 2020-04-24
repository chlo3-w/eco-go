import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

const HelpScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <ImageBackground source={require('../../assets/help-bg.png')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <TouchableOpacity>
                        <View>
                            <Ionicons style={styles.help} underlayColor="#ffffff00" name="ios-arrow-back" size={24} color="#FEFEFE" onPress={() => navigation.navigate('ChallengeList')}/>
                        </View>
                    </TouchableOpacity>
                </View>    
                <Text h3 style={styles.headerStyle}>Help</Text>
                <View style={styles.textContainer}>
                    <ScrollView style={styles.helpText}>
                        <Text h5 style={styles.textStyle}>Frequently Asked Questions (FAQs)</Text>
                        <Spacer />
                        <Text h5 style={styles.bodyStyle}>What is eco:go?</Text>
                        <Text h5 style={styles.answerStyle}>
                            Eco:go is a personal sustainability mobile application that challenges, rewards and educates users on how they can reduce their environmental impact. 
                            The app centres around creating a personalised experience for the user, giving them achievable, realistic and habit-forming eco-challenges; displaying relevant blog posts tailored to their interests and promoting local events to them ran by organisations who want to tackle climate change. 
                        </Text>
                        <Spacer />
                        <Text h5 style={styles.bodyStyle}>What is the aim of this application?</Text>
                        <Text h5 style={styles.answerStyle}>
                            The application aim is to encourage sustainable living and positive environmental impact through tailored, habit-forming eco-challenges, education and citizen engagement.
                        </Text>
                        <Spacer />
                        <Text h5 style={styles.bodyStyle}>How do you engage users?</Text>
                        <Text h5 style={styles.answerStyle}>
                            Engaging people to become more sustainable, and do so for an extended period of time is challenging. 
                            Research has shown that a percentage of our user base likes our app because we let them know how much carbon and water they can save by making simple actions habits. 
                            However, this alone does not engage all users, so we have incorporated game-like features into the application to attract people to play based on the impact (carbon and water) of each of our challenges. 
                        </Text>
                        <Spacer />
                        <Text h5 style={styles.bodyStyle}>What are your challenges based on?</Text>
                        <Text h5 style={styles.answerStyle}>
                            Every challenge that we offer our users has been scientifically backed to help reduce our overall environmental impact. 
                            We are following guidance and research outlined by similar environmental applications to ensure reliability and accuracy of our challenges.
                        </Text>
                        <Spacer />
                        <Text h5 style={styles.bodyStyle}>How do you manage user data?</Text>
                        <Text h5 style={styles.answerStyle}>
                            Eco:go is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. 
                            If you have any questions relating to this topic, please get in touch and we'd be happy to help.
                        </Text>
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        {/* <Text h5 style={styles.bodyStyle}>How can I get in touch?</Text>
                        <Text h5 style={styles.answerStyle}>
                            You can get in touch via email at help@eco-go.com or via any of our social media channels (Facebook and Twitter).
                        </Text>
                        <Spacer /> */}
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

HelpScreen.navigationOptions = {
    header:null,
  };

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 30,
        paddingLeft: 15,
        fontWeight: '600',
        fontSize: 18
    },
    bodyStyle: {
        fontSize: 20,
        paddingLeft: 15,
    },
    answerStyle: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: '200'
    },
    helpText: {
        marginTop: 10,
        padding: 5
    },
    help: {
        backgroundColor: 'transparent',
        padding: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#66b8af',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginHorizontal: 16,
        backgroundColor: 'transparent'
    },
    headerStyle: {
        color: 'white',
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 10,
    },
    textContainer: {
        marginTop: 100
    }
});

export default HelpScreen;