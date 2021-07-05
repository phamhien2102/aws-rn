import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IcCircle from '../assets/icons/circle.svg';
import IcSquare from '../assets/icons/square.svg';
import IcTriangle from '../assets/icons/triangle.svg';
import IcRandom from '../assets/icons/help-circle.svg';

import { RouteName } from './RouteName';
import Circle from '../screens/circle';
import Square from '../screens/square';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName: string, color: string) => {
    let icon;
    let ICON_SIZE = 20;
    if (routeName === RouteName.CIRCLE) {
        icon = <IcCircle width={ICON_SIZE} height={ICON_SIZE} stroke={color} />;
    } else if (routeName === RouteName.SQUARE) {
        icon = <IcSquare width={ICON_SIZE} height={ICON_SIZE} stroke={color} />;
    } else if (routeName === RouteName.TRIANGLE) {
        icon = <IcTriangle width={ICON_SIZE} height={ICON_SIZE} stroke={color} />;
    } else if (routeName === RouteName.ALL_SHAPES) {
        icon = <IcRandom width={ICON_SIZE} height={ICON_SIZE} stroke={color} />;
    }
    return icon;
};

const renderTabBarLabel = (routeName: string, color: string) => {
    let label;
    if (routeName === RouteName.CIRCLE) {
        label = <Text style={{ color }}>Circle</Text>;
    } else if (routeName === RouteName.SQUARE) {
        label = <Text style={{ color }}>Square</Text>;
    } else if (routeName === RouteName.TRIANGLE) {
        label = <Text style={{ color }}>Triangle</Text>;
    } else if (routeName === RouteName.ALL_SHAPES) {
        label = <Text style={{ color }}>Shapes</Text>;
    }
    return label;
};

const StyleTabBarOption = {
    activeTintColor: 'white',
    inactiveTintColor: '#46B4C3',
    activeBackgroundColor: '#46B4C3',
    inactiveBackgroundColor: 'white',
};

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => renderTabBarIcon(route.name, color),
                    tabBarLabel: ({ color }) => renderTabBarLabel(route.name, color),
                })}
                tabBarOptions={StyleTabBarOption}>
                <Tab.Screen name={RouteName.CIRCLE} component={Circle} />
                <Tab.Screen name={RouteName.SQUARE} component={Square} />
                <Tab.Screen name={RouteName.TRIANGLE} component={Circle} />
                <Tab.Screen name={RouteName.ALL_SHAPES} component={Square} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
