import {getCategoryName, getRecipes} from "../../data/MockDataAPI";
import {useLayoutEffect} from "react";
import {TouchableHighlight, View, Image, Text, FlatList} from "react-native";
import styles from "./styles"

export default function RecipeListScreen(props) {

    const {navigation, route} = props


    const item = route?.params?.category;
    const recipesArray = getRecipes(item.id);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.title,
            headerRight: () => <View/>,
        });
    }, []);

    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", {item});
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
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipesArray}
                      renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`}/>
        </View>
    )
}