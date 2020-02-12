import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Context as BlogContext } from '../context/blogContext';
import { WebView } from 'react-native-webview';

const blogPostScreen = ({navigation}) => {
    const { state } = useContext(BlogContext);
    const _id = navigation.getParam('_id');
    
    const blogPost = state.find(b => b._id === _id);
    const postURL = blogPost.url;

    renderLoadingView = () => {
        return (
        <View style = {styles.spinnerStyle}>
          <ActivityIndicator
            color='#e96d64'
            size='large'
            styles={styles.activityIndicator}
          />
        </View>
        );
      }

    return (
        <View style={{flex:1}}>
           <WebView
            style={{ flex: 1 }} 
            source={{ uri: `${postURL}` }} 
            renderLoading={this.renderLoadingView} startInLoadingState={true}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        marginTop:240,
        justifyContent: 'center',
        alignItems:'center'
    },
    spinnerStyle: {
        flex: 1,
        alignSelf:'center'
    }
});

export default blogPostScreen;