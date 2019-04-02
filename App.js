

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Movie from './tab/movie/Movie'
import Book from './tab/book/Book'


export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'movie'
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <TabNavigator tabBarStyle={{height:60}}>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'movie'}
                title="Movie"
                renderIcon={() => <Image source={require('./assets/ic_message1.png')} style={styles.imageIcon}/>}
                renderSelectedIcon={() => <Image source={require('./assets/ic_message2.png')} />}
                onPress={() => this.setState({ selectedTab: 'movie' })}>
              <Movie/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'book'}
                title="Book"
                renderIcon={() => <Image source={require('./assets/ic_contact1.png')} />}
                renderSelectedIcon={() => <Image source={require('./assets/ic_contact2.png')} />}
                onPress={() => this.setState({ selectedTab: 'book' })}>
              <Book/>
            </TabNavigator.Item>
          </TabNavigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
