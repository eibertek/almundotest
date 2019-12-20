import React, {Suspense} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { ROUTES } from '../views/Routes'
import { IHotelListProps } from './@types'
import { IStore } from '../store/redux/reducers/@types'
// import HotelListItem from './HotelListItem'


const HotelListItem = React.lazy(() => import('./HotelListItem'));

const HotelsListView = (props: IHotelListProps ) => {
    if(props.hotels && props.hotels.length===0) return <View>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>;    
    return (
        <View>
            <Text>Hotels</Text>
            <ScrollView>        
                <Suspense fallback={()=><View><Text>Loading...</Text></View>}>
                {props.hotels && props.hotels.map( (element, index) => 
                <HotelListItem {...element} key={`hotels_${index}`}/>)}
                </Suspense>
            </ScrollView>            
        </View>
    )
}

const mapStateToProps = (state:IStore) => ({
    hotels: state.hotels && state.hotels.collection,
});

export default connect(mapStateToProps)(HotelsListView);
