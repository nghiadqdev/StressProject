import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '@constants';
import { HomeScreen } from '@homeScreen';
import { SettingScreen } from '@settingScreen';
import { ProfileScreen } from '@profileScreen';
import AppFooter from './component/AppFooter';


const StackHome = createNativeStackNavigator();
const StackSetting = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTap() {
    return (
        <StackHome.Navigator initialRouteName={Routes.Home}>
            <StackHome.Screen
                name={Routes.Home}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </StackHome.Navigator>
    );
}

function SettingsTap() {
    return (
        <StackSetting.Navigator initialRouteName={Routes.Setting}>
            <StackSetting.Screen
                name={Routes.Setting}
                component={SettingScreen}
                options={{
                    headerShown: false,
                }}
            />
        </StackSetting.Navigator>
    );
}

function ProfileTap() {
    return (
        <StackSetting.Navigator initialRouteName={Routes.Profile}>
            <StackSetting.Screen
                name={Routes.Profile}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </StackSetting.Navigator>
    );
}

function BottomTab(props) {
    const { state, descriptors, navigation } = props;
    const tabIndex = state.index || 0;
    const currentRoute = state.routes[tabIndex];
    let isHide = false;
    if (currentRoute && currentRoute.state) {
        isHide = currentRoute.state.index;
    }
    return !isHide ? <AppFooter state={state} descriptors={descriptors} navigation={navigation} /> : null;
}
const AppTap = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTab {...props} /> }>
                <Tab.Screen name="Home" component={HomeTap} />
                <Tab.Screen name="Settings" component={SettingsTap} />
                <Tab.Screen name="Profile" component={ProfileTap} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppTap

const styles = StyleSheet.create({})