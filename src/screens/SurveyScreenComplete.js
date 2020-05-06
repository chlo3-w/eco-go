import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, TextInput, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { SimpleSurvey } from 'react-native-simple-survey';
import { Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

const GREEN = 'rgba(141,196,63,1)';
const RED = 'rgba(233,109,100,1)';
const defaultAnswers = { favoriteColor: 'nothing', favoriteNumber: '0', favoritePet: 'nothing' };

export default class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            },
            header:null,
        };
    }

    render() {
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);

        return (
            <View style={styles.background}>
            <View style={styles.titleBar}>
                    <TouchableOpacity>
                        <View>
                            <Ionicons style={styles.back} underlayColor="#ffffff00" name="ios-arrow-back" size={24} color="#FEFEFE" onPress={() => {this.props.navigation.navigate('ChallengeList');}}/>
                        </View>
                    </TouchableOpacity>
                </View> 
                <Text h3 style={styles.headerStyle}>Survey Results</Text>
                <View style={styles.container}>
                    {/* <ScrollView> */}
                        <Text style={styles.questionText}>These results help us tailor your eco-challenges by using your eating, shopping and travel habits.</Text>
                        <Text style={styles.resultText}>Results</Text>
                        <Text style={styles.result}>Your age: {answers.age}</Text>
                        <Text style={styles.result}>Your diet: {answers.diet.value}</Text>
                        <Text style={styles.result}>Your travel: {answers.vehicle.value}</Text>
                        <Text style={styles.result}>Your eco-score: {(answers.localFood.value + answers.foodWaste.value + answers.flights.value + answers.publicTransport.value + answers.clothes.value + answers.healthBeauty.value + answers.localShop.value)}</Text>
                        <Text style={styles.infoText}>(Your eco-score is a way of displaying how much you currently contribute to greenhouse gas emissions. This is easily reduced by changing your daily habits and living more sustainably!)</Text>
                        {/* <Text>Raw JSON: {JSON.stringify(this.props.navigation.getParam('surveyAnswers', {}))}</Text> */}
                    {/* </ScrollView> */}
                    <View style={styles.buttonContainer}>
                <Button 
                    buttonStyle={styles.button1}
                    title="Homepage"
                    color="#e96d64"
                    backgroundColor="#000"
                    onPress={() => {this.props.navigation.navigate('ChallengeList');}}
                />
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: RED,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
        padding: 15,
        marginBottom: 90,
        backgroundColor:'#22796f',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 22,
        color: 'white',
        fontWeight: '300',
        paddingTop: 15
    },
    infoText: {
        fontSize: 13,
        color: 'white',
        fontWeight: '300',
        paddingTop: 2
    },
    resultText: {
        marginBottom: 5,
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 20
    },
    result: {
        marginBottom: 5,
        fontSize: 22,
        color: 'white',
        fontWeight: '300',
    },
    titleBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginHorizontal: 16,
        marginTop: 45,
        marginLeft: -300
    },
    back: {
        backgroundColor: 'transparent',
        padding: 5,
    },
    button1: {
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        marginTop: 25,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
    },
    headerStyle: {
        color: 'white',
        marginRight: 100,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },
});
