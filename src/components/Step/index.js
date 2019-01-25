import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Step extends React.Component {
    render() {
        const { beat } = this.props;
        return (
            <Fragment>
                { beat === 1
                    ? <View style={styles.stepOn}></View>
                    : <View style={styles.stepOff}></View>
                }
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    stepOn: {
        margin: 4,
        height: 20,
        width: 20,
        backgroundColor: 'red'
    },
    stepOff: {
        margin: 4,
        height: 20,
        width: 20,
        backgroundColor: '#f6f6f6'
    }
});