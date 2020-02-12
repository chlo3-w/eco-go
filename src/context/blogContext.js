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




// import createDataContext from './createDataContext';

// const blogReducer = (state, action) => {
//     switch (action.type) {
//         case 'add_blogpost':
//             return [...state, {id: Math.floor(Math.random() * 9999), title: `Blog Post #${state.length + 1}` }];
//         default: 
//         return state;
//     }
// };

// const addBlogPost = dispatch => {
//     return () => {
//         dispatch({ type: 'add_blogpost'});
//     };
// };

// export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost},[]);



