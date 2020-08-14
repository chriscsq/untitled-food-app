import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { render } from 'react-dom';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const Restaurants = [
    { id: "1", uri: require('../assets/shokunin.jpg') },
    { id: "2", uri: require('../assets/pasta.jpg') },
    { id: "3", uri: require('../assets/shokunin.jpg') },
    { id: "4", uri: require('../assets/shokunin.jpg') },
    { id: "5", uri: require('../assets/shokunin.jpg') },
]


class RestaurantActionContainer extends React.Component  {

    constructor() {
        super();
        this.pan = new Animated.ValueXY();
        this.state = {
            currentIndex: 0
        }
    
        this.panResponder = 
            PanResponder.create({
                onMoveShouldSetPanResponder: () => true,
                onPanResponderGrant: () => {
                    this.pan.setOffset({
                        x: this.pan.x._value,
                        y: this.pan.y._value
                    });
                },
                onPanResponderMove: Animated.event(
                    [
                        null,
                        {dx: this.pan.x, dy: this.pan.y}
                    ]
                ),
                onPanResponderRelease: () => {
                    this.pan.flattenOffset();
                }
            });
    
    }

    
    RenderRestaurants = () => {
        return Restaurants.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null;
            } else if (i == this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this.panResponder.panHandlers}
                        key={i}
                        style={
                            [{transform: [{ translateX: this.pan.x}, {translateY: this.pan.y}]} ,
                            { height: SCREEN_HEIGHT - 300,
                            width: SCREEN_WIDTH,
                            padding: 10,
                            position: 'absolute' 
                        }]}>
                        <Image
                            style={{
                                flex: 1,
                                height: null,
                                width: null,
                                resizeMode: "cover",
                                borderRadius: 20,
                            }}
                            source={item.uri}
                        />
                    </Animated.View>
                );
            } else {
                return (
                    <Animated.View

                        key={item.id}
                        style={{
                            height: SCREEN_HEIGHT - 300,
                            width: SCREEN_WIDTH,
                            padding: 10,
                            position: 'absolute'
                        }}
                    >
                        <Image
                            style={{
                                flex:1,
                                height: null,
                                width: null,
                                resizeMode: "cover",
                                borderRadius: 20,
                            }}
                            source={item.uri}
                        />
                    </Animated.View>
                );
            }
        }).reverse();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 60}} />
                    <View style={{ flex: 1}}>
                        {this.RenderRestaurants()}
                    </View>
                <View style={{ height: 60}} />
            </View>
        )
    
    }

}



export default RestaurantActionContainer;