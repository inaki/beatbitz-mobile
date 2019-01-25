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
            return beats.map( (step, index) => <Step beat={step} key={Math.random().toString(36).substr(2, 9)}/>)
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
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    abbrs: {
        flex: 1
    },
    abbrsText: {
        color: '#666',
        padding: 5
    },
    tracks: {
        flexDirection: 'row',
        height: 27
    },
    patterns: {
        flex: 9
    }
  });

  export default Pattern;