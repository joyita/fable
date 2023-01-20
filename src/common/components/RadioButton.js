import React, { PropTypes } from 'react'
import { StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native'
import { View } from 'react-native-animatable'

const DEFAULT_SIZE_MULTIPLIER = 0.7
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.2

const RadioButton = ({ size, innerColor, outerColor, isSelected, onPress, ...props }) => {

    const outerStyle = {
        borderColor: outerColor,
        width: size + size * DEFAULT_SIZE_MULTIPLIER,
        height: size + size * DEFAULT_SIZE_MULTIPLIER,
        borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
        borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER
    };

    const innerStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: innerColor
    };

    const innerContent = isSelected
        ? <View style={innerStyle} {...props} />
        : null;

    return (
        <TouchableOpacity style={[styles.radio, outerStyle]} onPress={onPress}>
            {isSelected ? <View style={innerStyle} {...this.props} /> : null}
        </TouchableOpacity>
    )
};

// RadioButton.propTypes = {
//     size: PropTypes.number,
//     innerColor: PropTypes.string,
//     outerColor: PropTypes.string,
//     isSelected: PropTypes.bool,
//     onPress: PropTypes.func
// }

RadioButton.defaultProps = {
    size: 16,
    innerColor: '#FEC037',
    outerColor: '#FEC037'
}

const styles = StyleSheet.create({
    radio: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default RadioButton