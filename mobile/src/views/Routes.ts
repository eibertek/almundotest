import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HotelsListView from '../components/HotelsListView';
import HotelViewDetails from '../components/HotelViewDetails';
import Loading from '../components/Loading';

export const ROUTES = {
    APP: 'APP',
    HOTELLIST: 'HOTELLIST',
    HOTELDETAIL: 'HOTELDETAIL',
    LOADING: 'LOADING',
};


 const AppStack = createStackNavigator({ 
    [ROUTES.HOTELLIST]: HotelsListView, 
    [ROUTES.HOTELDETAIL]: HotelViewDetails,
    [ROUTES.LOADING]: Loading,
  });

export default createAppContainer(
  createSwitchNavigator(
    {
        [ROUTES.APP]: AppStack,
    },
    {
      initialRouteName: ROUTES.APP,
    }
  )
);
