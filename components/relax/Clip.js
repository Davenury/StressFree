import React, { useEffect } from 'react';
import { View } from 'react-native';

export function Clip(props){

    return (
        <View>
            <iframe width="650npm install react-native-sound"
                height="400"
                src={"https://www.youtube.com/embed/"+props.id}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
        </View>
    )
}