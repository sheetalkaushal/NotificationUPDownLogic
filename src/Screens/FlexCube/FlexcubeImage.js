import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';

const FlexcubeImage = () => {
    return (
        <View
            style={{ flex: 1 }}
            maskElement={
                <View style={{ flex: 1, backgroundColor: 'transparent', marginLeft: 10 }}>
                    <Svg height="50%" width="50%" viewBox="0 0 100 100">
                        <Path
                            d='M 0 0 L 100 30 L 100 151 L 0 120 Z'
                            fill="white"
                        />
                    </Svg>
                    <Svg height="20%" width="20%" viewBox="0 0 100 100">
                        <Path d='M 0 30 L 100 0 L 120 L 0 151 Z'
                            fill='white' />
                    </Svg>
                    <Svg height="20%" width="20%" viewBox="0 0 100 100" >
                        <Path d='M 99 35 L 0 70 L 100 L 201 70 Z'
                            fill='white' />
                    </Svg>
                </View>
            }
        >
            <Image
                source={{ uri: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" }}
                style={{ flex: 1 }}
                resizeMode="cover"
            />
            <Image source={{ uri: "https://www.pexels.com/photo/674010/download/" }}
                style={{ flex: 1 }}
                resizeMode='cover' />
            <Image source={{ uri: "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg" }}
                style={{ flex: 1 }}
                resizeMode='cover' />
     
        </View>
    );
};

export default FlexcubeImage;
