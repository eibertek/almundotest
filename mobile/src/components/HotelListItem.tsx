import React, {Suspense } from 'react'
import { View, Text, Image } from 'react-native'
import { IHotelListItemProps } from './@types'
import StarsRating from './StarsRating'
import DefaultStyles from '../styles/listItemStyles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { HOTEL_LOAD } from '../store/redux/actions/hotels';
import { TouchableHighlight } from 'react-native-gesture-handler';

// const ImageLazy = React.lazy(() => <Image
// source={{uri:`http://192.168.0.6:5000/images/${props.images[0]}`}} 
// style={{width: 100, height: 100, marginRight:20}}                        
// />);

const HotelListItem = (props:IHotelListItemProps) => {
    return (
            <View style={DefaultStyles.container} >
            <TouchableHighlight 
                underlayColor={"#CCCCCC"}                
                onPress={()=>props.goToDetails(props._id)} >
                <View style={{marginRight:20, marginLeft:20}}>
                    <View style={DefaultStyles.rowContainer}>
                        <Text style={DefaultStyles.nameText}>{props.name}</Text>
                        <Text style={DefaultStyles.priceText}>{props.price}</Text>
                    </View>
                    <View style={DefaultStyles.rowContainer}>
                        <Suspense fallback={()=><View><Text>Loading...</Text></View>}>
                            <Image
                                source={{uri:`http://192.168.0.6:5000/images/${props.images[0]}`}} 
                                style={{width: 100, height: 100}}                        
                            />
                        </Suspense>                
                    <StarsRating 
                        stars={props.stars} />               
                    </View>                             
                </View>    
            </TouchableHighlight>   
            </View>
    )
}

const mapDispatch = (dispatch: Dispatch) => ({
    goToDetails: (id: string) => dispatch({ type: HOTEL_LOAD.REQUESTED, id}),
});

export default connect(null, mapDispatch)(HotelListItem);


{/* <View>
                <Text onPress={()=>props.navigation.navigate(ROUTES.HOTELDETAIL)}>{element.name}</Text>
                    </View> */}