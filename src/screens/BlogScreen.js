import React, {useContext} from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
// import {WebView} from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Text, Avatar } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import  { Context as BlogContext} from '../context/blogContext';
import Spacer from '../components/Spacer';

const BlogScreen = ({ navigation }) => {
    const { state, fetchPosts } = useContext(BlogContext);

    return (
        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <NavigationEvents onWillFocus={fetchPosts}/>
            <ImageBackground source={require('../../assets/blog-bg2.png')} style={styles.backgroundImage}>
                <Text h3 style={styles.headerStyle}>Blog</Text>
                <View style={styles.filter}>
                    <ListItem 
                        containerStyle={{backgroundColor: '#66b8af', height: 50}}
                        style={styles.filterContainer}  title="Food"
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        checkBox={{uncheckedColor:'white'}}
                        />
                    <ListItem 
                        containerStyle={{backgroundColor: '#66b8af', height: 50}}
                        style={styles.filterContainer}  title="Travel"
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        checkBox={{uncheckedColor:'white'}}
                        />
                </View>
                <View style={styles.filter}>
                    <ListItem 
                        containerStyle={{backgroundColor: '#66b8af', height: 50}}
                        style={styles.filterContainer}  title="Fashion"
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        checkBox={{uncheckedColor:'white'}}
                        />
                    <ListItem 
                        containerStyle={{backgroundColor: '#66b8af', height: 50}}
                        style={styles.filterContainer}  title="Shopping"
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        checkBox={{uncheckedColor:'white'}}
                        />
                </View>
                <Spacer />
                <Spacer />
                <FlatList
                    style={styles.blogPost}
                    data={state}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('BlogPost', {_id: item._id})}>
                                 <ListItem containerStyle={{backgroundColor: '#66b8af', height: 110, marginBottom: 20, borderRadius: 12}} style={styles.post} chevron chevron={{ color: 'white' }} title={item.title} titleStyle={{ color: 'white', fontSize: 18, fontWeight:'bold'}} subtitle={item.author} subtitleStyle={{color: 'white', fontSize: 13, paddingTop: 5, fontWeight:'200'}} leftAvatar={{rounded:false, size: 'large', source:{uri:`${item.image}`}}}/>
                                </TouchableOpacity>
                            </View>
                            )
                        }}
                />
                </ImageBackground>
        </SafeAreaView>
    )
};

BlogScreen.navigationOptions = {
  title: 'Blog', 
  header: null, 
  tabBarIcon: <Feather name="message-square" size={20} />
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#22796f',
    justifyContent: 'center'
},
headerStyle: {
    color: 'white',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 10,
},
filterContainer: {
    width: 160,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 12,
    backgroundColor: 'red',
    color: 'white'
},
filter: {
    paddingBottom: 10,
    flexDirection: 'row'
},
post: {
    width: '92%',
    marginHorizontal: 13
},
backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    // marginTop: 250,
    // // marginHorizontal: 25,
    // position: 'absolute'
},
blogPost: {
    marginTop: 55
}
});

export default BlogScreen;