import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';

const GREEN = 'rgba(141,196,63,1)';
const RED = 'rgba(233,109,100,1)';
const defaultAnswers = { favoriteColor: 'nothing', favoriteNumber: '0', favoritePet: 'nothing' };

export default class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    render() {
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.questionText}>The results are in!</Text>
                        <Text style={styles.questionText}>Your diet: {answers.diet.value}</Text>
                        <Text style={styles.questionText}>Your eco-score: {(answers.localFood.value + answers.foodWaste.value + answers.vehicle.value + answers.flights.value + answers.publicTransport.value + answers.clothes.value + answers.healthBeauty.value + answers.localShop.value)}</Text>
                        <Text>Raw JSON: {JSON.stringify(this.props.navigation.getParam('surveyAnswers', {}))}</Text>
                    </ScrollView>
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
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
        padding: 15
    },
    questionText: {
        marginBottom: 20,
        fontSize: 24
    },
});
