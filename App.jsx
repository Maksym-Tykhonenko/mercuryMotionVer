import React, { useState, useEffect, useRef }  from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  MercuryCatchShinemotion,
  MercuryDailyOrbitmotion,
  MercuryInsightSpacemotion,
  MercuryMotionmotion,
  MercuryNewOrbitTaskmotion,
  MercuryOrbitsInfomotion,
  MercuryOverTimemotion,
  MercuryReadInsightSpacenmotion,
  MercuryReadyCatchmotion,
  MercurySetMotionmotion,
    MercuryWriteReflectionmotion
//  MercuryMotionProdScr
} from './Leadfiles/leadglobalmotion/MercuryCompMotion';
import MercuryMotionProdScr from './Leadfiles/leadcompmotion/MercuryMotionProdScr';

enableScreens();

const Stack = createStackNavigator();

function App() {
    const [route, setRoute] = useState(false);
    //console.log('route===>', route);
    
    ///////// Route
  const Route = ({ isFatch }) => {
    //if (!aceptTransperency || !completeLink) {
    //  // Показуємо тільки лоудери, поки acceptTransparency не true
    //  return null;
    //}

    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{
              //responseToPushPermition,
              //product: finalLink,
              //timeStampUserId: timeStampUserId,
            }}
            name="MercuryMotionProdScr"
            component={MercuryMotionProdScr}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator
                initialRouteName="MercuryOrbitsInfomotion"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="MercuryMotionmotion"
                    component={MercuryMotionmotion}
                />
                <Stack.Screen
                    name="MercuryCatchShinemotion"
                    component={MercuryCatchShinemotion}
                />
                <Stack.Screen
                    name="MercuryDailyOrbitmotion"
                    component={MercuryDailyOrbitmotion}
                />
                <Stack.Screen
                    name="MercuryInsightSpacemotion"
                    component={MercuryInsightSpacemotion}
                />
                <Stack.Screen
                    name="MercuryNewOrbitTaskmotion"
                    component={MercuryNewOrbitTaskmotion}
                />
                <Stack.Screen
                    name="MercuryOrbitsInfomotion"
                    component={MercuryOrbitsInfomotion}
                />
                <Stack.Screen
                    name="MercuryOverTimemotion"
                    component={MercuryOverTimemotion}
                />
                <Stack.Screen
                    name="MercuryReadInsightSpacenmotion"
                    component={MercuryReadInsightSpacenmotion}
                />
                <Stack.Screen
                    name="MercuryReadyCatchmotion"
                    component={MercuryReadyCatchmotion}
                /><Stack.Screen
                    name="MercurySetMotionmotion"
                    component={MercurySetMotionmotion}
                />
                <Stack.Screen
                    name="MercuryWriteReflectionmotion"
                    component={MercuryWriteReflectionmotion}
                />
            </Stack.Navigator>    
    );
  };
    
    ///////// Loader
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 4000);
  }, []);

  return (
      <NavigationContainer>
          {!loader ? (
              <MercuryMotionmotion />
          ): (
              <Route isFatch={route} />
          )}
            
      </NavigationContainer>
  );
}

export default App;

