import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface BookmarksNavigationProps<
  RouteName extends keyof BookmarksRoutes,
> {
  navigation: NativeStackNavigationProp<BookmarksRoutes, RouteName>;
  route: RouteProp<BookmarksRoutes, RouteName>;
}

export type BookmarksRoutes = {
  Bookmarks: undefined;
};
