import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { IStore } from '../store/redux/reducers/@types'
import StarsRating from './StarsRating'

const HotelViewDetails = (props:any) => {
    if(!props.hotel.name) return <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
    </View>;
    const { images, name, description, stars, price, breakfast, ammenities} = props.hotel || {};
    return (
        <View>            
            <Text>{name}</Text>
            <Text>Description: {description}</Text>
            <View>
                <Text>Price: {price}</Text>
                <StarsRating stars={stars} />
                {breakfast && <Text>has BreakFast!!</Text>}
            </View>
            <View >
                <Text>Ammenities:</Text>
                {ammenities && ammenities.map(ammenity => <Text>{ammenity}</Text>)}
            </View>
        </View>
    )
}

const mapState = (state: IStore) => ({
    hotel: state.hotels && state.hotels.currentHotelItem,
});
export default connect(mapState)(HotelViewDetails) 
