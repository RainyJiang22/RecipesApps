import {useNavigation} from "expo-router";
import {StackActions} from "@react-navigation/native";
import {Button, View} from "react-native";
import styles from "./styles";

export default function Settings() {

    const navigation = useNavigation()

    const handlePopToPop = () => {
        navigation.dispatch(StackActions.popToTop)
    };

    return (
        <View style={styles.container}>
            <Button title="回到index" onPress={handlePopToPop}/>
        </View>
    )

}