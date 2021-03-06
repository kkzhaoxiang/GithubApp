import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import NavigationUtil from '../navigator/NavigationUtil';
export default class WelcomePage extends Component {

    componentDidMount() {
        this.timer=setTimeout(() => {
            NavigationUtil.resetToHomePage({
                navigation: this.props.navigation
            })
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Welcome
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