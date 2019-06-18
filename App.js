import React from 'react';
import {View} from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default function App() {
  return (
    <View>
      <Header headerText={'albums'}/>
      <AlbumList />
    </View>
  )
}
