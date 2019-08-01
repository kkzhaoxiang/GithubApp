import {
    createStackNavigator, 
    createMaterialTopTabNavigator, 
    createBottomTabNavigator, 
    createSwitchNavigator
} from 'react-navigation';

import WelcomePage from '../page/Welcome';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator(
    {
        WelcomePage: {
            screen: WelcomePage,
            nvigationOptions: {
                header: null
            }
        }
    }
);

const MainNavigator = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                // header: null
            }
        },
        DetailPage: {
            screen: DetailPage,
            navigationOptions: {

            }
        },
    }
);

export default createSwitchNavigator(
    {
        Init: InitNavigator,
        Main: MainNavigator,
    },
    {
        navigationOptions: {
            header: null
        }
    }
);
