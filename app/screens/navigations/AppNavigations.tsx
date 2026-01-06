import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from "@/app/details";
import HomeScreen from "@/app/screens/Home/HomeScreen";
import DrawerContainer from "@/app/screens/DrawContainer/DrawContainer";


const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: '首页' }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{title : '详情页'}}/>
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();


function DrawerStack() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: 250,
                },
            }}
            drawerContent={({navigation}) => <DrawerContainer navigation={navigation}/>}
        >
            <Drawer.Screen name='Main' component={MainNavigator} />
        </Drawer.Navigator>
    );
}

function AppContainer() {
    return DrawerStack()
}

export default AppContainer