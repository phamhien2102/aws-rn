import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import IcHome from '../assets/icons/home.svg';
import IcProfile from '../assets/icons/user-alt.svg';
import { RouteName } from './RouteName';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName: string, color: string) => {
    let icon;
    let ICON_SIZE = 24;
    if (routeName === RouteName.HOME) {
        icon = <IcHome width={ICON_SIZE} height={ICON_SIZE} fill={color} />;
    } else if (routeName === RouteName.PROFILE) {
        icon = <IcProfile fill={color} width={ICON_SIZE} height={ICON_SIZE} />;
    }
    return icon;
};

const renderTabBarLabel = (routeName: string, color: string) => {
    let label;
    if (routeName === RouteName.HOME) {
        label = <Text style={{ color }}>Home</Text>;
    } else if (routeName === RouteName.PROFILE) {
        label = <Text style={{ color }}>Profile</Text>;
    }
    return label;
};

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => renderTabBarIcon(route.name, color),
                    tabBarLabel: ({ color }) => renderTabBarLabel(route.name, color),
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name={RouteName.HOME} component={Home} />
                <Tab.Screen name={RouteName.PROFILE} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
