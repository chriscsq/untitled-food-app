import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withOrientation } from 'react-navigation';

const FilterButton = () => {
    return (
        <TouchableOpacity style={styles.backgroundStyle}>
            <Text style={styles.textStyle}>Test</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        color: 'white',
        backgroundColor: 'black',
        height: 20,
        width: 50,  
    },
    textStyle: {
        color: 'white'
    }

});

export default FilterButton;
