import React, { useEffect,useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { colors } from '../../services/colors';
import { Audio } from 'expo-av';
import { View,Button } from 'react-native';

export function SoundPlayerComponent(props){

    const [sound, setSound] = useState();

    const playSound = async () => {
        if(props.url!==null){
            const { sound } = await Audio.Sound.createAsync(props.url);
            setSound(sound);
            await sound.playAsync();
        }
      }

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : null;
    }, [sound]);


    useEffect(() => {
        playSound()
    }, [])

    return(
        <View>
            <DotLoader size={150} color={colors.green} />
        </View>
    )
}