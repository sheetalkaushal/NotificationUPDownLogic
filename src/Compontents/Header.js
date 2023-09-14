//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import strings from '../constants/lang';
import { moderateScale, scale, verticalScale } from '../styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';

// create a component
const Header = ({
    backIcon,
    rightIcon,
    onPress = () => { },
    greenDot,
    title,
    style,
    onPressBack = () => { },
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.container, ...style }}>
            {backIcon ?
                <TouchableOpacity
                hitSlop={{
                    top: moderateScale(20),
                    bottom: moderateScale(20),
                    right: moderateScale(20),
                    left: moderateScale(20)

                }}
                    style={styles.backViewStyle}
                    onPress={() => {
                        navigation.goBack()
                        onPressBack()
                    }}
                >
                    {/* <View style={{
                        padding: moderateScale(10),
                        borderRadius: moderateScale(20),
                        backgroundColor: 'red'
                    }}> */}

                    <Image resizeMode='contain' style={styles.backImageStyle} source={imagePath.ic_back} />

                    {/* </View> */}
                </TouchableOpacity>
                : <View
                    style={styles.backViewStyle}
                />
            }
            <View style={styles.centerTextStyle}>
                <Text style={styles.textStyle}>{title}</Text>

            </View>
            {rightIcon ?
                <TouchableOpacity
                    style={styles.rightIconStyle}
                    onPress={onPress}
                >
                    <Image source={rightIcon} />
                    <Image
                        style={{
                            position: 'absolute'
                        }}
                        source={greenDot ? imagePath.ic_greendot : null} />
                </TouchableOpacity>
                : <View
                    style={styles.rightIconStyle}
                />
            }

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        ...commonStyles.rowCenter,
        justifyContent: 'space-between',
        height: moderateScale(60),
    },
    textStyle: {
        ...commonStyles.medium20,
    },
    backViewStyle: {
        // flex: 1,
        width: '20%',
        alignItems: 'flex-start',
    },
    rightIconStyle: {
        // flex: 1,
        width :'20%',
        alignItems: 'flex-end'
    },
    centerTextStyle: {
        flex: 1,
        alignItems: 'center',
    },
    backImageStyle: { 
        height: verticalScale(16), 
        width: scale(16),
        // padding: moderateScale(10)
     }
});

//make this component available to the app
export default Header;
