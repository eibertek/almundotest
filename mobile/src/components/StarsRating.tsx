import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DefaultStyles from '../styles/listItemStyles';

declare interface IStarRatingProps {
    stars: number,    
}

const StarsRating = (props:IStarRatingProps) => {
    const starColor = DefaultStyles[`stars${props.stars}`];
    return (
        <View style={DefaultStyles.starsContainer}>
            <Text style={{...DefaultStyles.starsText, ...starColor}}>{Array(props.stars || 0).fill("*").join("")}</Text>
        </View>
    )
}

export default StarsRating
