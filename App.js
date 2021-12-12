import React from 'react';
import {Provider} from 'react-redux'
import store from './src/common/store';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToysScreen from "./src/toys/ToysScreen";
import { NavigationContainer } from '@react-navigation/native';
import ActivitiesScreen from "./src/activities/ActivitiesScreen";
import StoryScreen from "./src/settings/SettingScreen";
import SettingScreen from "./src/settings/SettingScreen";

export default function App() {

    const Tab =  createBottomTabNavigator();

    const Stack = createStackNavigator();

    function toys() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Toys" component={ToysScreen}>
                </Stack.Screen>
            </Stack.Navigator>
        );
    }

    const activityStack = createStackNavigator();

    function activities() {
        return (
            <activityStack.Navigator>
                <activityStack.Screen name="Activities" component={ActivitiesScreen}>
                </activityStack.Screen>
            </activityStack.Navigator>
        );
    }

    const storyStack = createStackNavigator();

    function story() {
        return (
            <storyStack.Navigator>
                <storyStack.Screen name="Story" component={StoryScreen}>
                </storyStack.Screen>
            </storyStack.Navigator>
        );
    }

    const settingsStack = createStackNavigator();

    function settings() {
        return (
            <settingsStack.Navigator>
                <settingsStack.Screen name="Settings" component={SettingScreen}>
                </settingsStack.Screen>
            </settingsStack.Navigator>
        );
    }


    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                        <Tab.Screen name="Toys" component={toys} options={{headerShown: false}} />
                        <Tab.Screen name="Activities" component={activities}  options={{headerShown: false}} />
                        <Tab.Screen name="Story" component={story} options={{headerShown: false}} />
                        <Tab.Screen name="Settings" component={settings} options={{headerShown: false}} />
                    </Tab.Navigator>
            </NavigationContainer>
        </Provider>
  );

}
