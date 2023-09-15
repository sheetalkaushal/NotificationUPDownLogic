import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FlexcubeImage = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.face, styles.top]}>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={[styles.face, styles.left]}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' }}
          style={styles.image}
        />
      </View>
      <View style={[styles.face, styles.right]}>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2019/05/29/20/01/sunset-4238445_960_720.jpg' }}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  face: {
    position: 'absolute',
    width: 80,
    height: 50,
    backgroundColor: 'transparent',
    borderColor: 'black',

  },
  left: { transform: [{ rotateY: '-80deg' }, { translateX: -30 }, { scaleX: 3 }, { scaleY: 1 }] },
  right: { transform: [{ rotateY: '80deg' }, { translateX: 190 }, { scaleX: 3 }, { scaleY: 1 }] },
  top: { transform: [{ rotateX: '40deg' }, { rotateZ: '40deg' }, { translateY: -70 }, { scaleX: 1 }, { scaleY: 1 }] },
  image: {
    flex: 1,
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});
export default FlexcubeImage
