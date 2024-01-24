import { StackNavigationProp } from '@react-navigation/stack';
import Screens from 'src/app/navigation/screens';

export type AuthStackNavigatorParamsList = {
  [Screens.WelcomeScreen]: undefined;
  [Screens.ChooseAuthProvider]: undefined;
  [Screens.RequestRegistrationCode]: undefined;
  [Screens.CodeScreen]: undefined;
  [Screens.PersonYouLove]: undefined;
  [Screens.OnboardingSlider]: { stepType: 'signup' } | undefined;
  [Screens.Login]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.SignIn]: undefined;
  [Screens.SignUpEmail]: undefined;
  [Screens.ForgotPassword]: undefined;
  [Screens.StoryBook]: undefined;
  [Screens.SignUpPhone]:
    | { mode?: 'link' | 'update'; signIn: boolean }
    | undefined;
};

export type AuthNavigationProp =
  StackNavigationProp<AuthStackNavigatorParamsList>;
