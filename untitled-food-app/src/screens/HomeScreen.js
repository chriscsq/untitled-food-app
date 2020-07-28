import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Yelp from '../api/Yelp';

import FilterButton from '../components/FilterButton';
import SearchBar from '../components/SearchBar';
import RestaurantOverviewCard from '../components/RestaurantOverviewCard';

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
        <View style={styles.viewStyle} >
            <SearchBar 
                term={searchTerm} 
                onTermChange={setSearchTerm}
                onTermSubmit={searchApi}
            />
            <FilterButton styles={styles.buttonFilterStyle} />
            <RestaurantOverviewCard 
                style={styles.restaurantCardStyle}
            />
            <Text>Your results are {results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'column',
        alignItems: 'center'

    },
    buttonFilterStyle: {

    },
    restaurantCardStyle: {
        alignItems: 'center'
    },
});

export default HomeScreen;

