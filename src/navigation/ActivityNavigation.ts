import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ActivityNavigationProps<
  RouteName extends keyof ActivityRoutes,
> {
  navigation: NativeStackNavigationProp<ActivityRoutes, RouteName>;
  route: RouteProp<ActivityRoutes, RouteName>;
}

export type ActivityRoutes = {
  Activity: undefined;
};
