import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "@/app/details";

// @ts-ignore
function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>这里是首页</Text>

            <Button
                title="跳转到详情页"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>这里是详情页</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
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

export default App