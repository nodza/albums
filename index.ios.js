import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
        <StatusBar
            barStyle="light-content"
        />
        <Header headerText={'Album.'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
