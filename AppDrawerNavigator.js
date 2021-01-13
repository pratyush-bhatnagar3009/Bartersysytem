import React from 'react';
import {AppTabNavigator} from './AppTabnavigator';
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSideBarMenu from './CustomSideBar';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen : AppTabNavigator
    },
    },
    {
    contentComponent : CustomSideBarMenu 
    },
    {
    initialRouteName:'Home'
})