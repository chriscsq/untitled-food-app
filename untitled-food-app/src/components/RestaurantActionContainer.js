import React, {useRef} from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { render } from 'react-dom';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const Restaurants = [
    { id: "1", uri: require('../assets/shokunin.jpg') },
    { id: "2", uri: require('../assets/shokunin.jpg') },
    { id: "3", uri: require('../assets/shokunin.jpg') },
    { id: "4", uri: require('../assets/shokunin.jpg') },
    { id: "5", uri: require('../assets/shokunin.jpg') },
]


const RestaurantActionContainer = () =>  {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {dx: pan.x, dy: pan.y}
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;

    return (
        <View>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x}, {translateY: pan.y}]
                }}
                
                {...panResponder.panHandlers}
            >
                <View 
                    style={{                    
                        width: 300,
                        height: 500,
                        borderRadius: 20,
                        backgroundColor: 'red',
                        }}
                >

                </View>
            </Animated.View>
        </View>
    )

}

export default RestaurantActionContainer;