import {View, Text, Button} from 'react-native';
import styles from './styles';
import {router} from "expo-router";

export default function Details() {
    return (
        <View style={styles.container}>
            <Text>这里是详情页</Text>

            <Button title="返回上一页" onPress={() => router.back()}></Button>
        </View>
    );
}
