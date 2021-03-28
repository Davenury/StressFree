import React, { useEffect,useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { colors } from '../../services/colors';
import { Audio } from 'expo-av';
import { View } from 'react-native';

export function SoundPlayerComponent(props){

    const [sound, setSound] = useState();
    const [url,setUrl] = useState()

    const playSound = async () => {
        if(props.url!==null){
            setUrl(props.url)
            if(typeof sound !== "undefined"){
                sound.stopAsync()
                sound.unloadAsync()
            }
            const { sound } = await Audio.Sound.createAsync(props.url);
            setSound(sound);
            await sound.playAsync();
        }
      }

    useEffect(() => {
        if(props.url!==url)playSound()
        return sound
        ? () => {
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);



    return (<View>
        <DotLoader size={150} color={colors.green} />
    </View>)
}