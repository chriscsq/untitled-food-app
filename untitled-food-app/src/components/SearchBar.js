import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <EvilIcons name="search" style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search" 
                autoCapitalize="none"
                autoCorrect={true}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </ View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;