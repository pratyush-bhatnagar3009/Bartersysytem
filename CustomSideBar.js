import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <DrawerItems {...this.props}
                />
            </View>
        )
    }
}