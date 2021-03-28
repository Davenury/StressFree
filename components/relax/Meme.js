import React from 'react';
import { getWidth, getHeight } from '../../services/dimensions';
import { View } from 'react-native';

export function Meme(props){

    const prepareWidth = () => {
        return `${getWidth()*3/4}px`
    }

    console.log(props.url)

    return(
        <View>
            <img src={props.url}
            style={{width: prepareWidth(), marginLeft: "auto", marginRight: "auto"}}/>
        </View> 
    )
}