import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FilterButton = () => {
    return (
        <TouchableOpacity style={styles.backgroundStyle}>
            <Text style={styles.textStyle}>Test</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'black',
        height: 20,
        width: 50,
    },
    textStyle: {
        color: 'white',
        alignSelf: 'center'
    }

});

export default FilterButton;
