import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Pattern from '../Pattern';
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
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFC0CB'
    },
    userHeader: {
        flexDirection: 'row',
        padding: 10
    },
    userName: {
      backgroundColor: '#ffc966',
      paddingTop: 15,
      paddingLeft: 15,
      fontSize: 18
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25
    },
    patternBox: {
      backgroundColor: '#00ffa5'
    },
  });
  
  const mapStateToProps = state => {
      return {
        users: state.users
      }
  }

  export default connect(mapStateToProps)(Card);