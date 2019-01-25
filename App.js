import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import { StyleSheet, View, FlatList } from 'react-native';
import { LOGO, INAKI } from './src/images';
import Header from './src/components/Header';
import ContentList from './src/components/ContentList';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <Header logo={LOGO}/>
            <ContentList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  card: {
    width: '90%',
    backgroundColor: '#FFC0CB'
  },
  content: {
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    paddingTop: 10
  }
});

export default App;