import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ProfileNavigationProps<RouteName extends keyof ProfileRoutes> {
  navigation: NativeStackNavigationProp<ProfileRoutes, RouteName>;
  route: RouteProp<ProfileRoutes, RouteName>;
}

export type ProfileRoutes = {
  Profile: undefined;
};
