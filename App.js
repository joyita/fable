import React from 'react';
import {Provider} from 'react-redux'
import {store, persistor} from './src/common/store';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToysScreen from "./src/toys/ToysScreen";
import { NavigationContainer } from '@react-navigation/native';
import ActivitiesScreen from "./src/activities/ActivitiesScreen";
import StoryScreen from "./src/story/StoryScreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from "./src/common/styles/Header";
import AddToysScreen from "./src/toys/AddToysScreen";
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

    const Tab =  createBottomTabNavigator();

    const Stack = createStackNavigator();

    function toys() {
        return (
            <Stack.Navigator defaultScreenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen name="Toys" component={ToysScreen} options={{headerShadowVisible: false, headerStyle:Header.container, headerTitleAlign: 'center'}}>
                </Stack.Screen>
                <Stack.Screen name="AddToy" component={AddToysScreen} options={{headerShadowVisible: false}}>
                </Stack.Screen>
            </Stack.Navigator>
        );
    }

    const activityStack = createStackNavigator();

    function activities() {
        return (
            <activityStack.Navigator>
                <activityStack.Screen name="Activities" component={ActivitiesScreen} options={{headerShadowVisible: false, headerStyle:Header.container, headerTitleAlign: 'center'}}>
                </activityStack.Screen>
            </activityStack.Navigator>
        );
    }

    const storyStack = createStackNavigator();

    function story() {
        return (
            <storyStack.Navigator>
                <storyStack.Screen name="Story" component={StoryScreen}  options={{headerShadowVisible: false, headerStyle:Header.container, headerTitleAlign: 'center'}}>
                </storyStack.Screen>
            </storyStack.Navigator>
        );
    }


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName={"Activities"}>
                        <Tab.Screen name="Toys" component={toys} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="pets" color={color} size={size} />
                            ),
                        }} />
                        <Tab.Screen name="Activities" component={activities}  options={{headerShown: false, tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="stroller" color={color} size={size} />
                            ),
                        }} />
                        <Tab.Screen name="Story" component={story} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="import-contacts" color={color} size={size} />
                            ),
                        }} />
                    </Tab.Navigator>
            </NavigationContainer>
            </PersistGate>
        </Provider>
  );

}
