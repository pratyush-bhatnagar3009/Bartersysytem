import React from 'react';
import BookDonateScreen from '../Screens/BookDonateScreen';
import BookRequestScreen from '../Screens/BookRequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen:BookDonateScreen},
    BookRequest:{screen:BookRequestScreen}
})