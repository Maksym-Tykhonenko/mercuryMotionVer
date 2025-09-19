import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Linking,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
//import { WebView } from 'react-native-webview';
//import DeviceInfo from 'react-native-device-info';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const MercuryMotionProdScr = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191d24',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Mercury Motion</Text>
    </View>
  );
};

export default MercuryMotionProdScr;
