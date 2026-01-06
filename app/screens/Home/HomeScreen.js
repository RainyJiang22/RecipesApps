import {useNavigation} from "@react-navigation/native";
import {router} from "expo-router";
import React, {useLayoutEffect, useState} from "react";
import {FlatList, Image, Text, TouchableHighlight, View} from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";
import {recipes} from "../../data/dataArrays";
import {getCategoryName} from "../../data/MockDataAPI";
import styles from "./style";
import {Stack} from "expo-router/stack";


export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuImage
                    onPress={() => {

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
