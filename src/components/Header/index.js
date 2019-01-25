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
      height: 90,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
        height: 90,
        alignSelf: 'center'
    },
    logoContainer:{

        height: 90,
        width: 220,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
    },
    sidebarIcon: {
      width: 75,
      height: 100
    }
  });
  