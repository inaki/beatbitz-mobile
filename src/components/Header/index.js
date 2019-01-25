import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.sidebarIcon}></View>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={this.props.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.sidebarIcon}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
      height: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f6f6f6',
    },
    logo: {
        height: 90,
        alignSelf: 'center',
    },
    logoContainer:{
      flex: 1,
      height: 100,
      width: 250,
      backgroundColor: 'red'
    },
    sidebarIcon: {
      width: 75,
      height: 100,
      backgroundColor: 'blue'
    }
  });
  