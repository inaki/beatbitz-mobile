import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Step extends React.Component {
    render() {
        return (
            <View style={styles.step}></View>
        )
    }
}

const styles = StyleSheet.create({
    step: {
        margin: 4,
        height: 20,
        width: 20,
        backgroundColor: 'red'
    }
});