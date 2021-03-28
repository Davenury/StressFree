import React, { useEffect,useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { colors } from '../../services/colors';
import { Audio } from 'expo-av';
import { View,Button } from 'react-native';

export function SoundPlayerComponent(props){

    const [sound, setSound] = useState();

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(props.url);
        setSound(sound);
        await sound.playAsync();
      }

    const stopMusic = async () => {
        sound.unloadAsync();
    }

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);


    useEffect(() => {
        playSound()
    }, [])

    return(
        <View>
            <DotLoader size={150} color={colors.green} />
            <Button 
                variant="contained"
                color="primary"
                onClick={stopMusic}>
                    Stop music
            </Button>
        </View>
    )
}