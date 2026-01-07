import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Details from "@/app/details";
import HomeScreen from "@/app/screens/Home/HomeScreen";
import DrawerContainer from "@/app/screens/DrawContainer/DrawContainer";
import RecipeScreen from "@/app/screens/Recipe/RecipeScreen";
import RecipeListScreen from "@/app/screens/RecipeList/RecipeListScreen";
import CategoriesScreen from "@/app/screens/Categories/CategoriesScreen";
import SearchScreen from "@/app/screens/Search/SearchScreen";
import IngredientScreen from "@/app/screens/Ingredient/IngredientScreen";
import IngredientsDetailsScreen from "@/app/screens/IngredientsDetails/IngredientsDetailsScreen";


const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: '首页'}}
            />

            <Stack.Screen
                name="Details"
                component={Details}
                options={{title: '详情页'}}/>

            <Stack.Screen name='Recipe' component={RecipeScreen} options={{title: '食谱'}}/>
            <Stack.Screen name='Categories' component={CategoriesScreen} options={{title: '分类'}}/>
            <Stack.Screen name='RecipesList' component={RecipeListScreen} options={{title: '食谱列表'}}/>
            <Stack.Screen name='Search' component={SearchScreen} options={{title: '搜索'}}/>
            <Stack.Screen name='Ingredient' component={IngredientScreen} options={{title: '原料'}}/>
            <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} options={{title: '原料详情'}}/>
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