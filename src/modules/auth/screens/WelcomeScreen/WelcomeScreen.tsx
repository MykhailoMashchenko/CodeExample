import { useNavigation } from '@react-navigation/native';
import SL_logo from 'assets/animations/FTUE_intro-2.json';
import Logo from 'assets/images/SLLogo.png';
import LottieView from 'lottie-react-native';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, ScrollView } from 'react-native';
import { AuthNavigationProp } from 'src/app/navigation/navigators/AuthNavigator/types';
import Screens from 'src/app/navigation/screens';
import useOnboardingHandler from 'src/modules/auth/hooks/useOnboardingHandler';
import styles from 'src/modules/auth/screens/WelcomeScreen/styles';
import usePlaySound, {
  TypeOfPlaySound,
} from 'src/modules/quests/hooks/usePlaySound';
import { Box, Button } from 'src/shared/components';
import SafeAreaView from 'src/shared/components/SafeAreaView';

export function WelcomeScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation<AuthNavigationProp<Screens.WelcomeScreen>();
  const { playSound } = usePlaySound();
  const { changeHasPlayedSound, getHasPlayedSoundFromStorage } =
    useOnboardingHandler();

  const processToStartScreen = useCallback(() => {
    navigation.navigate(Screens.PersonYouLove);
  }, [navigation]);

  const processToLoginScreen = useCallback(() => {
    navigation.navigate(Screens.ChooseAuthProvider);
  }, [navigation]);

  const playSoundOnce = useCallback(async () => {
    const status = await getHasPlayedSoundFromStorage();

    if (!status) {
      changeHasPlayedSound(true);

      playSound(TypeOfPlaySound.Registration).catch(() =>
        console.warn('Error Play sound Sign Up'),
      );
    }
  }, [changeHasPlayedSound, getHasPlayedSoundFromStorage, playSound]);

  useEffect(() => {
    void playSoundOnce();
  }, [playSoundOnce]);

  return (
    <>
      <ImageBackground
        imageStyle={styles.backgroundContainerImage}
        source={Logo}
        style={styles.backgroundContainer}
      />
      <SafeAreaView edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Box style={styles.titleBlock}>
            <LottieView
              autoPlay
              loop={false}
              source={SL_logo}
              style={styles.animation}
            />
          </Box>
          <Box style={styles.bottomButtons}>
            <Button
              kind="primary"
              marginBottom="m"
              onPress={processToStartScreen}
            >
              {t('auth.welcomeScreen.getStartedButton')}
            </Button>
            <Button
              kind="secondary"
              onPress={processToLoginScreen}
            >
              {t('auth.welcomeScreen.signInButton')}
            </Button>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}


