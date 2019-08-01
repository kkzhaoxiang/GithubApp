import {
    createBottomTabNavigator, createAppContainer, 
} from 'react-navigation';
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavouritePage from './FavouritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HomePage extends Component {
    render() {
        const AppContainer = this._appContainer();
        return <AppContainer/>;
    }

    _appContainer() {
        const Tab = this._tabNavigator();
        const AppContainer = createAppContainer(Tab)
        return AppContainer
    }
    _tabNavigator() {
        return createBottomTabNavigator(
            {
                PopularPage: {
                    screen: PopularPage,
                    navigationOptions: {
                        tabBarLabel: '最热',
                        tabBarIcon: ({tintColor, focused}) => (
                            <MaterialIcons 
                                name={'whatshot'}
                                size={26}
                                style={{color: tintColor}}
                            />
                        )
                    }
                },
                TrendingPage: {
                    screen: TrendingPage,
                    navigationOptions: {
                        tabBarLabel: '趋势',
                        tabBarIcon: ({tintColor, focused}) => (
                            <MaterialIcons 
                                name={'trending-up'}
                                size={26}
                                style={{color: tintColor}}
                            />
                        )
                    }
                },
                FavouritePage: {
                    screen: FavouritePage,
                    navigationOptions: {
                        tabBarLabel: '收藏',
                        tabBarIcon: ({tintColor, focused}) => (
                            <MaterialIcons 
                                name={'favorite-border'}
                                size={26}
                                style={{color: tintColor}}
                            />
                        )
                    }
                },
                MyPage: {
                    screen: MyPage,
                    navigationOptions: {
                        tabBarLabel: '我的',
                        tabBarIcon:({tintColor, focused}) => (
                            <MaterialIcons
                                name={'person'}
                                size={26}
                                style={{color: tintColor}}
                            />
                        )
                    }
                }
            },
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