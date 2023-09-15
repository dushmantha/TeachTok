import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface DiscoverNavigationProps<
  RouteName extends keyof DiscoverRoutes,
> {
  navigation: NativeStackNavigationProp<DiscoverRoutes, RouteName>;
  route: RouteProp<DiscoverRoutes, RouteName>;
}

export type DiscoverRoutes = {
  Discover: undefined;
};
