import { createStackNavigator } from '@react-navigation/stack';

import ChooseAuthProvider from 'src/modules/auth/screens/ChooseAuthProvider/ChooseAuthProvider';
import CodeScreen from 'src/modules/auth/screens/CodeScreen/CodeScreen';
import ForgotPassword from 'src/modules/auth/screens/ForgotPassword/ForgotPassword';
import OnbardingSlider from 'src/modules/auth/screens/OnboardingSlider/OnboardingSlider';
import PersonYouLove from 'src/modules/auth/screens/PersonYouLove/PersonYouLove';
import RequestRegistrationCode from 'src/modules/auth/screens/RequestRegistrationCode/RequestRegistrationCode';
import SignIn from 'src/modules/auth/screens/SignIn/SignIn';
import WelcomeScreen from 'src/modules/auth/screens/WelcomeScreen/WelcomeScreen';
// import StorybookScreen from 'src/screens/StorybookScreen';

import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { AuthStackNavigatorParamsList } from 'src/app/navigation/navigators/AuthNavigator/types';
import Screens from 'src/app/navigation/screens';
import { commonFlex } from 'src/app/theme/constants/commonStyles';
import { getAppConfigs } from 'src/database/Database';
import SignUpEmailScreen from 'src/modules/auth/screens/SignUpEmail/SignUpEmail';
import SignUpPhoneScreen from 'src/modules/auth/screens/SignUpPhone/SignUpPhone';
import { Box } from 'src/shared/components';

const AuthStack = createStackNavigator<AuthStackNavigatorParamsList>();

function AuthNavigator() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [
    isRegistrationCodeScreensVisible,
    setIsRegistrationCodeScreensVisible,
  ] = useState(true);

  const requestAppConfig = useCallback(async () => {
    try {
      const res = await getAppConfigs();
      //TODO: rewrite to more secure solution once backend is ready
      if (res?.inProcessOfStoreCheck) {
        setIsRegistrationCodeScreensVisible(!res.inProcessOfStoreCheck);
      }
    } catch (err) {
      console.warn('err', err);
    } finally {
      setIsDataLoaded(true);
    }
  }, []);

  useEffect(() => {
    void requestAppConfig();
  }, [requestAppConfig]);

  if (!isDataLoaded) {
    // Render a loading indicator or placeholder component
    return (
      <Box
        flex={1}
        style={commonFlex.center}
      >
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <AuthStack.Navigator>
      {isRegistrationCodeScreensVisible ? (
        <>
          <AuthStack.Screen
            component={CodeScreen}
            name={Screens.CodeScreen}
            options={{
              headerShown: false,
            }}
          />
          <AuthStack.Screen
            component={RequestRegistrationCode}
            name={Screens.RequestRegistrationCode}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : null}

      <AuthStack.Screen
        component={WelcomeScreen}
        name={Screens.WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        component={ChooseAuthProvider}
        name={Screens.ChooseAuthProvider}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={SignUpPhoneScreen}
        name={Screens.SignUpPhone}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={PersonYouLove}
        name={Screens.PersonYouLove}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={OnbardingSlider}
        name={Screens.OnboardingSlider}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={SignUpEmailScreen}
        name={Screens.SignUpEmail}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={SignIn}
        name={Screens.SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        component={ForgotPassword}
        name={Screens.ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
