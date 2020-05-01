import React, {useState, useContext} from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Text, CheckBox } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import  { Context as BlogContext} from '../context/blogContext';
import Spacer from '../components/Spacer';

const BlogScreen = ({ navigation }) => {
    //FETCH POSTS
    const { state, fetchPosts } = useContext(BlogContext);

    //FILTER BUTTONS
    const [FoodEnabled, setFoodEnabled] = useState(false);
    const toggleFood = () => setFoodEnabled(previousState => !previousState);
    const [TravelEnabled, setTravelEnabled] = useState(false);
    const toggleTravel = () => setTravelEnabled(previousState => !previousState);
    const [FashionEnabled, setFashionEnabled] = useState(false);
    const toggleFashion = () => setFashionEnabled(previousState => !previousState);
    const [ShoppingEnabled, setShoppingEnabled] = useState(false);
    const toggleShopping = () => setShoppingEnabled(previousState => !previousState);

    return (
        <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
            <NavigationEvents onWillFocus={fetchPosts}/>
            <ImageBackground source={require('../../assets/blog-bg2.png')} style={styles.backgroundImage}>
                <Text h3 style={styles.headerStyle}>Blog</Text>
                <View style={styles.filter}>
                    <View style={styles.filterContainer}>
                        <CheckBox
                            title="Food"
                            containerStyle={{marginTop: 6, marginBottom: 6, backgroundColor: '#66b8af', borderRadius: 10, borderWidth: 0}}
                            right={false}
                            textStyle={{color:'white', fontSize: 20}}
                            uncheckedColor='white'
                            checkedColor='white'
                            borderColor='#E96D64'
                            iconRight={false}
                            onPress={toggleFood}
                            checked={FoodEnabled}
                        />
                    </View>
                    <View style={styles.filterContainer}>
                        <CheckBox
                            title="Travel"
                            containerStyle={{marginTop: 6, marginBottom: 6, backgroundColor: '#66b8af', borderRadius: 10, borderWidth: 0}}
                            right={false}
                            textStyle={{color:'white', fontSize: 20}}
                            uncheckedColor='white'
                            checkedColor='white'
                            borderColor='#E96D64'
                            iconRight={false}
                            onPress={toggleTravel}
                            checked={TravelEnabled}
                        />
                    </View>
                </View>
                <View style={styles.filter}>
                    <View style={styles.filterContainer}>
                        <CheckBox
                            title="Fashion"
                            containerStyle={{marginTop: 6, marginBottom: 6, backgroundColor: '#66b8af', borderRadius: 10, borderWidth: 0}}
                            right={false}
                            textStyle={{color:'white', fontSize: 20}}
                            uncheckedColor='white'
                            checkedColor='white'
                            borderColor='#E96D64'
                            iconRight={false}
                            onPress={toggleFashion}
                            checked={FashionEnabled}
                        />
                    </View>
                    <View style={styles.filterContainer}>
                        <CheckBox
                            title="Shopping"
                            containerStyle={{marginTop: 6, marginBottom: 6, backgroundColor: '#66b8af', borderRadius: 10, borderWidth: 0}}
                            right={false}
                            textStyle={{color:'white', fontSize: 20}}
                            uncheckedColor='white'
                            checkedColor='white'
                            borderColor='#E96D64'
                            iconRight={false}
                            onPress={toggleShopping}
                            checked={ShoppingEnabled}
                        />
                    </View>
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
    backgroundColor: '#66b8af',
    color: 'white'
},
filter: {
    marginTop: 5,
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
},
blogPost: {
    marginTop: 40
},
switch: {
    position: 'absolute',
}
});

export default BlogScreen;