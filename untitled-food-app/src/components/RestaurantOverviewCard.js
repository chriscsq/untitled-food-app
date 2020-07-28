import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const RestaurantOverviewCard = () => {
    return (
        <View>
            <Image 
                style={styles.restaurantImage}
                source={{ uri: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg?itok=iSRiZkeg'}}
            />
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantImage: {
        height: 450,
        width: 320,
        backgroundColor: 'red',
        borderRadius: 20
    }
});

export default RestaurantOverviewCard;
