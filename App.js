/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App: () => Node = () => {
  function writeData() {
    firestore().collection('Board').add({
      title: '하이루',
      UserId: 'RHYdqfLx9OTbLErsKLHD', // 로그인할때 받아와서 AsyncStorage에 저장한 id
      contents: '이건내용',
    });
  }
  return <Button onPress={writeData} title="데이터보내기" />;
};

export default App;
