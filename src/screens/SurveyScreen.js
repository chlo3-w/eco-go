import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, TextInput, View, TouchableOpacity } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { ListItem, Text } from 'react-native-elements';
import { Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';


const GREEN = 'rgba(102,184,175,1)';
const RED = 'rgba(233,109,100,1)';
const WHITE = 'rgba(255,255,255,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the Survey!\n\nWe want you to enjoy a fully personlised app experience and to do this we would like to ask you some questions.',
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
                value: 'Meat'
            },
            {
                optionText: 'Meat rarely in meals',
                value: 'Meat'
            }, 
            {
                optionText: 'Vegetarian',
                value: 'Vegetarian'
            }, 
            {
                optionText: 'Vegan',
                value: 'Vegan'
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
                value: 'Car'
            },
            {
                optionText: 'Motorbike',
                value: 'Motorbike'
            },
            {
                optionText: 'Public Transport',
                value: 'Public Transport'
            },
            {
                optionText: 'Walk / Cycle',
                value: 'Walk / Cycle'
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
                backgroundColor: '#fff',
                height: 40,
                elevation: 5,
            },
            headerTitle: 'Survey',
            headerTitleStyle: {
                flex: 1,
            },
            header: null,
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: GREEN, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        // USE HERE TO CALCULATE ECO SCORE FOR EACH USER TO UPDATE USER'S DETAILS ON DATABASE (IN ORDER TO PERSONALISE ECO-CHALLENGES)

        const infoQuestionsRemoved = [...answers];

        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyComplete', { surveyAnswers: answersAsObj });
    }

    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            // case 'favoriteColor': {
            //     if (COLORS.includes(answer.value.toLowerCase())) {
            //         this.setState({ backgroundColor: answer.value.toLowerCase() });
            //     }
            //     break;
            // }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ justifyContent: 'center', flexDirection:'row', width:'100%', marginTop: 20, marginBottom: 5, backgroundColor:'#e96d64',borderWidth: 5,
            borderRadius: 10,borderColor: '#e96d64' }}>
                <Button
                    color={WHITE}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={WHITE}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ justifyContent: 'center', flexDirection:'row', width:'100%', marginTop: 5, marginBottom: 5, backgroundColor:'#fff',borderWidth: 5,
            borderRadius: 10,borderColor: '#fff' }}>
                <Button
                    style={styles.buttonNext}
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
            <View style={{ justifyContent: 'center', flexDirection:'row', width:'100%', marginTop: 5, marginBottom: 5, backgroundColor:'#fff',borderWidth: 5,
            borderRadius: 10,borderColor: '#fff'}}>
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
            <View style={{ marginLeft: 10, marginRight: 10}}>
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
             <View style={styles.titleBar}>
                    <TouchableOpacity>
                        <View>
                            <Ionicons style={styles.back} underlayColor="#ffffff00" name="ios-arrow-back" size={24} color="#FEFEFE" onPress={() => {this.props.navigation.navigate('ChallengeList');}}/>
                        </View>
                    </TouchableOpacity>
                    <Text h3 style={styles.headerStyle}>Survey</Text>
                </View> 
                {/* <View style={styles.headerContainer}>
                <Text h3 style={styles.headerStyle}>Settings</Text>
                </View> */}
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-end' }}
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
                
                {/* <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView> */}
                
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
        marginTop: -200
    },
    // answersContainer: {
    //     width: '90%',
    //     maxHeight: '20%',
    //     marginTop: 50,
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    //     marginBottom: 20,
    //     backgroundColor: 'white',
    //     elevation: 20,
    //     borderRadius: 10,
    // },
    surveyContainer: {
        minWidth: '90%',
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: '#22796f',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 15,
        marginTop: -100,
        marginBottom: 250,
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
        fontSize: 20,
        color: 'white',
        fontWeight: '300',
        paddingTop: 20
    },
    category: {
        marginBottom: 20,
        fontSize: 30,
        color: 'white',
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
        marginRight: 10,
        color: 'white'
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
        fontSize: 22,
        marginLeft: 10,
        color: 'white',
        fontWeight: '300',
    },
    title: {
        flex: 0.15,
        alignSelf: 'flex-start',
        paddingLeft: 20,
        paddingBottom: 5,
        backgroundColor: 'black'
    },
    titleBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginHorizontal: 16,
        marginTop: 45,
        marginLeft: -310,
    },
    back: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        padding: 5,
        paddingLeft: 15,
        paddingRight: -25
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        marginRight: -105,
        marginTop: 38,
        marginLeft: -20,
    },
});
