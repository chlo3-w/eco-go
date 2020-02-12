import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { ListItem, Text } from 'react-native-elements';


const GREEN = 'rgba(102,184,175,1)';
const RED = 'rgba(233,109,100,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the eco:go survey!\n\nWe want you to enjoy a fully personlised app experience and to do this we would like to ask you some questions.',
    },
    {
        questionType: 'NumericInput',
        questionText: 
            'Question 1 of 10\n\nHow old are you?',
        questionId: 'age',
        placeholderText: 'e.g 18',
        categoryName: 'Basic Questions'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 2 of 10\n\nHow would you describe your diet?',
        questionId: 'diet',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'Meat in most meals',
                value: 40
            },
            {
                optionText: 'Meat rarely in meals',
                value: 30
            }, 
            {
                optionText: 'Vegetarian',
                value: 'vegetarian'
            }, 
            {
                optionText: 'Vegan',
                value: 'vegan'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 3 of 10\n\nHow often do you buy locally sourced food?',
        questionId: 'localFood',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'Never / Not sure',
                value: 40
            },
            {
                optionText: 'Rarely',
                value: 30
            },
            {
                optionText: 'Often',
                value: 20
            },
            {
                optionText: 'Always',
                value: 10
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 4 of 10\n\nHow much of the food you buy is wasted/thrown away?',
        questionId: 'foodWaste',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'More than 40%',
                value: 40
            },
            {
                optionText: '20% - 40%',
                value: 30
            },
            {
                optionText: '0% - 20%',
                value: 20
            },
            {
                optionText: 'None',
                value: 10
            }
        ]
    },{
        questionType: 'SelectionGroup',
        questionText:
            'Question 5 of 10\n\nWhat kind of vehicle do you mainly use?',
        questionId: 'vehicle',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'Car',
                value: 40
            },
            {
                optionText: 'Motorbike',
                value: 30
            },
            {
                optionText: 'Public Transport',
                value: 20
            },
            {
                optionText: 'Walk / Cycle',
                value: 10
            }
        ]
    },{
        questionType: 'SelectionGroup',
        questionText:
            'Question 6 of 10\n\nHow many flights have you taken in the last year?',
        questionId: 'flights',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'More than 5',
                value: 40
            },
            {
                optionText: 'Between 3 and 5',
                value: 30
            },
            {
                optionText: '1 or 2',
                value: 20
            },
            {
                optionText: 'None',
                value: 10
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 7 of 10\n\nHow long do you spend on public transport in a week?',
        questionId: 'publicTransport',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'Over 5 hours',
                value: 40
            },
            {
                optionText: 'Between 2 and 5 hours',
                value: 30
            },
            {
                optionText: 'Less than 2 hours',
                value: 20
            },
            {
                optionText: "None / Don't use",
                value: 10
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 8 of 10\n\nHow much do you spend on clothes in an average month?',
        questionId: 'clothes',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'More than £100',
                value: 40
            },
            {
                optionText: 'Less than £100',
                value: 30
            },
            {
                optionText: 'Less than £50',
                value: 20
            },
            {
                optionText: "£0",
                value: 10
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 9 of 10\n\nHow much do you spend on health/beauty in an average month?',
        questionId: 'healthBeauty',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'More than £50',
                value: 40
            },
            {
                optionText: 'Less than £50',
                value: 30
            },
            {
                optionText: 'Less than £20',
                value: 20
            },
            {
                optionText: "£0",
                value: 10
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Question 10 of 10\n\nHow often do you buy locally sourced clothes/health/beauty?',
        questionId: 'localShop',
        questionSettings: {
            autoAdvance: true,
        },
        options: [
            {
                optionText: 'Never / Not sure',
                value: 40
            },
            {
                optionText: 'Rarely',
                value: 30
            },
            {
                optionText: 'Often',
                value: 20
            },
            {
                optionText: "Always",
                value: 10
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: 'Thanks for providing us with your information! For more information into how this data is used, please visit our Privacy Policy.'
    },
];

export default class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: RED,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: GREEN, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
       // USE THIS SPACE TO GENERATE USER'S ECO-SCORE TO UPDATE ONTO DATABASE

        const infoQuestionsRemoved = [...answers];
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyComplete', { surveyAnswers: answersAsObj });
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={RED}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={RED}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={RED}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={RED}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={RED}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? RED : GREEN}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={4} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }
    renderInfo = (categoryName) => {
        return (
                <Text style={styles.category}>{categoryName}</Text>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={2}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        renderInfo={this.renderInfo}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                </View>
                
                <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        
        elevation: 20,
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        minWidth: '90%',
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 15,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    category: {
        marginBottom: 20,
        fontSize: 30,
        backgroundColor: 'blue',
        color: 'black',
        height: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
    title: {
        flex: 0.15,
        alignSelf: 'flex-start',
        paddingLeft: 20,
        paddingBottom: 5
    }
});
