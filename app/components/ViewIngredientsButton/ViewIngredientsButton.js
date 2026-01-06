import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton(props) {
    return (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={props.onPress}>
            <View style={styles.container}>
                <Text style={styles.text1}>View Ingredients</Text>
            </View>
        </TouchableHighlight>
    );
}

ViewIngredientsButton.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string
};
