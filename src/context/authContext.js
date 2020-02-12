import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import axiosApi from '../api/axiosApi';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        case 'signin':
            return { errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return {token: null};
        case 'fetch_details':
            return action.payload;
        case 'fetch_email':
            return action.payload;
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token});
        navigate('mainFlow');
    } else {
        navigate('loginFlow');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'});
};

const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await axiosApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('mainFlow');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Oops! Something went wrong with sign up :(' });
    }
};

const signin = dispatch => async ({email, password}) => {
        try {
            const response = await axiosApi.post('/signin', {email,password});
            await AsyncStorage.setItem('email', JSON.stringify(email));
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            navigate('challengeFlow');
            const userDetail = await AsyncStorage.getItem('email');
            console.log(userDetail);
        } catch (err) {
            dispatch({
                type: 'add_error',
                payload: "Oops! Something went wrong with sign in :("
            })
        }
    };

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('loginFlow');
};

const fetchEmail = dispatch => async () => {
    await AsyncStorage.getItem('email');
    dispatch({ type: 'fetch_email'});
};

const fetchDetails = dispatch => async () => {
    const response = await axiosApi.get('/user');
    dispatch({ type: 'fetch_details', payload: response.data});
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin, fetchDetails, fetchEmail},
    { token: null, errorMessage: '' }
);