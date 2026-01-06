import {View, Image} from "react-native";
import styles from "./style"


export default function SplashScreen() {
    return <View style={styles.container}>
        <Image style={styles.photo} source={require("../../../assets/icons/cookie100.png")}/>
    </View>
}