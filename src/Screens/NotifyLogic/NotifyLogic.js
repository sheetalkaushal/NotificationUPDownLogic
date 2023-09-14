// //import liraries
// import React, { Component, useCallback, useState } from 'react';
// import { View, Text, StyleSheet, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
// import strings from '../../constants/lang';
// import WrapperContainer from '../../Components/WrapperContainer';
// import imagePath from '../../constants/imagePath';
// import colors from '../../styles/colors';
// import { moderateScale, scale, verticalScale } from '../../styles/responsiveSize';
// import commonStyles from '../../styles/commonStyles';
// import Header from '../../Compontents/Header';


// const NotificationItemArray = [
//     {
//         id: 1,
//         icon: imagePath.ic_NotifcationExclude,
//         name: "name",
//         OvalIcon: imagePath.ic_NotificationOval,
//         Now: "now",
//         DownArrow: imagePath.ic_DownArrow,
//         notificationName: "Hi Anastassia!",
//         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
//     },
//     {
//         id: 2,
//         icon: imagePath.ic_NotifcationExclude,
//         name: "name",
//         OvalIcon: imagePath.ic_NotificationOval,
//         Now: "now",
//         DownArrow: imagePath.ic_DownArrow,
//         notificationName: "Hi Anastassia!",
//         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
//     },
//     {
//         id: 3,
//         icon: imagePath.ic_NotifcationExclude,
//         name: "name",
//         OvalIcon: imagePath.ic_NotificationOval,
//         Now: "now",
//         DownArrow: imagePath.ic_DownArrow,
//         notificationName: "Hi Anastassia!",
//         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
//     },
//     {
//         id: 4,
//         icon: imagePath.ic_NotifcationExclude,
//         name: "name",
//         OvalIcon: imagePath.ic_NotificationOval,
//         Now: "now",
//         DownArrow: imagePath.ic_DownArrow,
//         notificationName: "Hi Anastassia!",
//         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
//     },
// ]
// // create a component
// const NotifyLogic = () => {
//     const [arrow, setArrow] = useState(false);
//     // const [dropArrow, setdropArrow] = useState(false);
//     const NotificationComponent = useCallback((item, index) => {

//         return (
//             <View key={index} style={styles.NotificationView}>
//                 <View style={styles.NotificationListView}>
//                     <View style={styles.iconimg}>
//                         <Image style={styles.iconimgstyle} source={item.icon} />
//                     </View>
//                     <View style={styles.namestyle}>
//                         <Text style={styles.nametextStyle}>{item.name}</Text>
//                     </View>
//                     <View style={styles.ovalimg}>
//                         <Image style={styles.OvalStyle} source={item.OvalIcon} />
//                     </View>
//                     <View style={styles.nowstyle}>
//                         <Text style={styles.nowstyles}>{item.Now}</Text>
//                     </View>
//                     {item.Content ? (
//                         <TouchableOpacity style={styles.arrowimg}
//                             onPress={() => {
//                                 setArrow(arrow == item.id ? -1 : item.id);
//                                 // setdropArrow()
//                             }
//                             }
//                         >
//                             <Image style={styles.Arrow} source={arrow == item.id ? imagePath.ic_UpArrow : imagePath.ic_DownArrow} />
//                         </TouchableOpacity>) : null}
//                 </View>
//                 <View style={styles.notifyContent}>
//                     <Text style={styles.notificationNameStyles}>{item.notificationName}</Text>
//                     {arrow == item.id && (
//                         <Text style={styles.contentstyles}>{item.Content}</Text>
//                     )}
//                 </View>
//                 <View style={styles.borderline}></View>
//             </View>
//         )
//     }, [arrow])
//     return (
//         <WrapperContainer>
//             <Header
//                 backIcon
//                 title={strings.NOTIFICATIONS}
//             />
//             <ScrollView style={styles.Headerconatiner}>
//                 <View style={styles.mainContainer}>
//                 </View>
//                 {NotificationItemArray.map((item, index) => {
//                     return (
//                         NotificationComponent(item, index)
//                     )
//                 })}
//             </ScrollView>
//         </WrapperContainer>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     Headerconatiner: {
//         backgroundColor: colors.white
//     },
//     NotificationView: {
//         marginTop: moderateScale(20),
//     },
//     NotificationListView: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "flex-start",
//     },
//     notifyContent: {
//         marginTop: moderateScale(8)
//     },
//     iconimg: {
//         justifyContent: "center"
//     },
//     borderline: {
//         borderWidth: .69,
//         borderColor: colors.gray1,
//         marginTop: moderateScale(8),
//         width: moderateScale(500)
//     },
//     namestyle: {
//         marginLeft: moderateScale(12),
//         marginTop: moderateScale(2)
//     },
//     ovalimg: {
//         marginLeft: moderateScale(9)
//     },
//     nowstyle: {
//         marginLeft: moderateScale(8),
//         marginTop: moderateScale(2)
//     },
//     Arrow: {
//         width: scale(9),
//         height: verticalScale(6),
//     },
//     iconimgstyle: {
//         width: scale(15),
//         height: verticalScale(15)
//     },
//     nametextStyle: {
//         ...commonStyles.regular13,
//         color: colors.Purple
//     },
//     OvalIcon: {
//         width: scale(4),
//         height: verticalScale(4),
//         color: "black"
//     },
//     nowstyles: {
//         ...commonStyles.regular13,
//         color: "black"
//     },
//     notificationNameStyles: {
//         ...commonStyles.regular16,
//         color: colors.black
//     },
//     arrowimg: {
//         marginLeft: moderateScale(7),
//     },
//     contentstyles: {
//         ...commonStyles.regular14,
//         color: colors.blackOpacity50
//     }
// });
// export default NotifyLogic;






