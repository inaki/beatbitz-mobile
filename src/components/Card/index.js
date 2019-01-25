import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Pattern from '../Pattern';
import Details from '../Details';
import { connect } from 'react-redux';

class Card extends React.Component {
    render() {
        
        const { data, users } = this.props;
        const user = users.find( item => item.email === this.props.data.email);
        if(user !== undefined) {
            console.log(user.profileImageUrl)
        }
        return (
            <View style={styles.container}>
                <View style={styles.userHeader}>
                    { user !== undefined && 
                        <Image 
                            style={styles.avatar}
                            source={{uri: user.profileImageUrl}}
                            risizeMode='contain'
                        />}
                    <Text style={styles.userName}>{data.author}</Text>
                </View>
                <View style={styles.patternBox}>
                    <Pattern beats={this.props.data.beats}/>
                </View>
                <View style={styles.details}>
                    <Details bpm={'122'} genre={'Techno'} song={'Sexual Healing - Martin Gaye'}/>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        paddingBottom: 25
    },
    userHeader: {
        flexDirection: 'row',
        padding: 10
    },
    userName: {
      paddingTop: 15,
      paddingLeft: 15,
      fontSize: 18
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25
    },
    patternBox: {},
    details: {}
  });
  
  const mapStateToProps = state => {
      return {
        users: state.users
      }
  }

  export default connect(mapStateToProps)(Card);