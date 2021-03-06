import React from 'react';
import { getWidth, getHeight } from '../../services/dimensions';
import { View, ScrollView } from 'react-native';

export function Meme(props){

    const prepareWidth = () => {
        return `${getWidth()*3/4}px`
    }

    return(
        <ScrollView>
            <img src={props.url}
            style={{width: prepareWidth(), marginLeft: "auto", marginRight: "auto", marginTop: "20px"}}/>
        </ScrollView> 
    )
}