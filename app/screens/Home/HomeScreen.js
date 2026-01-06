import { Stack } from "expo-router/stack";
import React, { useLayoutEffect } from "react";
import { FlatList, Image, Text, TouchableHighlight, View } from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";
import { recipes } from "../../data/dataArrays";
import { getCategoryName } from "../../data/MockDataAPI";
import styles from "./style";


export default function HomeScreen(props) {
    const {navigation} = props
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuImage
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                />
            ),
            headerRight: () => <View/>,
        });
    }, [navigation]);

    const onPressRecipe = (item) => {

    };

    const renderRecipes = ({item}) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{uri: item.photo_url}}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
            </View>
        </TouchableHighlight>
    );

    return (
        <View>
            <Stack.Screen options={{
                title: "Home",
            }}
            />
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes}
                      renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`}/>
        </View>
    );
}
