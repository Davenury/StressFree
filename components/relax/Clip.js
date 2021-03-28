import React, { useState } from 'react';
import { View } from 'react-native';
import { getWidth } from '../../services/dimensions'

export function Clip(props){

    return (
        <View>
            <iframe width={getWidth()}
                height="400"
                src={"https://www.youtube.com/embed/"+props.id}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
        </View>
    )
}