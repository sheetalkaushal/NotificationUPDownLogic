import { View, Text } from 'react-native'
import React from 'react'
import FlexcubeImage from './src/Screens/FlexCube/FlexcubeImage'
import Notification from './src/Screens/NotifyLogic/NotifyLogic'

const App = () => {
  return (
    <View style={{flex:1}}>
   <FlexcubeImage/>
   {/* <Notification/> */}
    </View>
  )
}

export default App