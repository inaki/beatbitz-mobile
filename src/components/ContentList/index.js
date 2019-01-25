import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Card from '../Card';
import { fetchPatterns, fetchUsers } from '../../actions';

class ContentList extends React.Component {
    componentDidMount() {
        this.props.fetchPatterns();
        this.props.fetchUsers();
    }
    render() {
        const { patterns } = this.props;
        return (
            <FlatList
              data={patterns}
              renderItem={({item}) => {
                  return <Card data={item}/>
              }}
              keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        patterns: state.patterns
    }
}

export default connect(mapStateToProps, {
    fetchPatterns,
    fetchUsers
})(ContentList);