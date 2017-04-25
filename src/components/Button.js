import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}>
            <Text style={textStyle}>BUY</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#32a70c',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#32a70c',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;