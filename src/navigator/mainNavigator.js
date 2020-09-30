import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen411457Navigator from '../features/BlankScreen411457/navigator';
import BlankScreen311456Navigator from '../features/BlankScreen311456/navigator';
import BlankScreen011216Navigator from '../features/BlankScreen011216/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen411457: { screen: BlankScreen411457Navigator },
BlankScreen311456: { screen: BlankScreen311456Navigator },
BlankScreen011216: { screen: BlankScreen011216Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
