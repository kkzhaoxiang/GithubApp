import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

export default class PopularPage extends Component {
    render() {

        const TabNavigator = createMaterialTopTabNavigator(
            {
                PopularTab1: {
                    screen: PopularTab,
                    navigationOptions: {
                        title: 'Tab1'
                    }
                },
                PopularTab2: {
                    screen: PopularTab,
                    navigationOptions: {
                        title: 'Tab1'
                    }
                },
                PopularTab3: {
                    screen: PopularTab,
                    navigationOptions: {
                        title: 'Tab1'
                    }
                },
                
            }
        );

        const TabContainer = createAppContainer(TabNavigator);

        return (
            <View style={{flex: 1}}>
                <TabContainer/>
            </View>
        );
    }
}

class PopularTab extends Component {
    render() {

        const {tabLabel} = this.props;
        
        return (
            <View style={styles.container}>
                <Text>
                {tabLabel}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
});