import {Button, Text, View} from "react-native";
import {router} from "expo-router";
import styles from "./styles";


export default function Index() {

    return (
        <View style={styles.container}>
            <Text>这里是首页</Text>
            <Button title="跳转到详情页" onPress={() => router.navigate('/details')}/>
        </View>
    )
}
// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

