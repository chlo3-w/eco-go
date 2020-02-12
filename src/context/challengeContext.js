import React from 'react';
import createDataContext from './createDataContext';
import axiosApi from '../api/axiosApi';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'fetch_challenges':
      return action.payload;
    default:
      return state;
  }
};

const fetchChallenges = dispatch => async () => {
  const response = await axiosApi.get('/challenges');
  dispatch({ type: 'fetch_challenges', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  Reducer,
  { fetchChallenges },
  []
);
