import React from 'react';
import createDataContext from './createDataContext';
import axiosApi from '../api/axiosApi';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'fetch_posts':
      return action.payload;
    default:
      return state;
  }
};

const fetchPosts = dispatch => async () => {
  const response = await axiosApi.get('/posts');
  dispatch({ type: 'fetch_posts', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  Reducer,
  { fetchPosts },
  []
);

