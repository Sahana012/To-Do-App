import React from 'react';
import { Image } from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <Image
      source={require('../assets/1-11074_cute-santa-claus-png-cute-santa-claus-vector.png')}
      style={{width:"40%", height: "100%"}} />
    )
  }
}
