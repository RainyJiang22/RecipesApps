import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Details from "@/app/details";
import HomeScreen from "@/app/screens/Home/HomeScreen";
import DrawerContainer from "@/app/screens/DrawContainer/DrawContainer";
import RecipeScreen from "@/app/screens/Recipe/RecipeScreen";
import RecipeListScreen from "@/app/screens/RecipeList/RecipeListScreen";
import CategoriesScreen from "@/app/screens/Categories/CategoriesScreen";


const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="首页"
                component={HomeScreen}
                options={{title: '首页'}}
            />

            <Stack.Screen
                name="Details"
                component={Details}
                options={{title: '详情页'}}/>

            <Stack.Screen name='食谱' component={RecipeScreen}/>
            <Stack.Screen name='分类' component={CategoriesScreen}/>
            <Stack.Screen name='食谱列表' component={RecipeListScreen}/>
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
            <Drawer.Screen name='Main' component={MainNavigator}/>
        </Drawer.Navigator>
    );
}

function AppContainer() {
    return DrawerStack()
}

export default AppContainer