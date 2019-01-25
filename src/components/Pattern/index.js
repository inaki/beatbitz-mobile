import React from 'react';
//import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { tracks } from '../../utils/variables';
import Step from '../Step';

class Pattern extends React.Component {

    renderAbbrs() {
        return tracks.map((item, index) => {
            return (
                <Text key={index} style={styles.abbrsText}>{item.abbr}</Text>
            )
        })
    }

    renderTracks() {
        return tracks.map((track, index) => {
            const trackBeats = this.props.beats[track.value];
            return (
                <View key={track.value + Math.random().toString(36).substr(2, 9)} style={styles.tracks}>
                    { this.renderSteps(trackBeats)}
                </View>
            )
            
        })
    }

    renderSteps(beats) {
        if(beats !== undefined) {
            return beats.map( (step, index) => <Step key={Math.random().toString(36).substr(2, 9)}/>)
        } else {
            return null;
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.abbrs}>
                    {this.renderAbbrs()}
                </View>
                <View style={styles.patterns}>
                    {this.renderTracks()}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFC0CB',
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    abbrs: {
        flex: 1,
        backgroundColor: '#000'
    },
    abbrsText: {
        color: '#fff',
        padding: 5
    },
    tracks: {
        flexDirection: 'row',
        backgroundColor: '#ffede0',
        height: 27
    },
    patterns: {
        flex: 9,
        backgroundColor: '#fff'
    }
  });

  export default Pattern;