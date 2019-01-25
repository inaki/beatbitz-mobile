import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Details extends React.Component {
    render() {
        const { song, bpm, genre } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.song}>{song} </Text>
                <Text style={styles.genre}>{genre}</Text>
                <Text style={styles.bpm}>bpm: {bpm}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
  
    },
    song: {
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 18
    },
    genre: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        color: '#666'
    },
    bpm: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        color: '#666'
    }
});