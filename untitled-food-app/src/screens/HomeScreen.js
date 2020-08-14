import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Yelp from '../api/Yelp';

import FilterButton from '../components/FilterButton';
import SearchBar from '../components/SearchBar';
import RestaurantOverviewCard from '../components/RestaurantOverviewCard';
import RestaurantActionContainer from '../components/RestaurantActionContainer';
const HomeScreen = () => {

    /* 
    States:
        searchTerm - from search bar
        results - from yelp api call
    */
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);


    /* 
    API calls 
    */

    const searchApi = async () => {
        const response = await Yelp.get('/search', {
            params: {
                limit: 50,
                searchTerm,
                location: 'calgary'
            }
        });
        setResults(response.data.businesses);
        console.log(response.data.businesses);
    }


    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={styles.viewStyle}>
                <SearchBar 
                    term={searchTerm} 
                    onTermChange={setSearchTerm}
                    onTermSubmit={searchApi}
                />
                <RestaurantActionContainer style={styles.restaurantContainerStyle}/>

                <FilterButton style={styles.buttonFilterStyle} />
                <Text>results: {results.length}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    buttonFilterStyle: {

    },
    restaurantContainerStyle: {
        alignItems: 'center'
    },
});

export default HomeScreen;

