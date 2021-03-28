import React, { useEffect } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { colors } from '../../services/colors';
import SoundPlayer from 'react-native-sound-player'

export function SoundPlayerComponent(props){

    const play = () => {
        try {
            SoundPlayer.playUrl('https://example.com/music.mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    useEffect(() => {
        play()
    }, [])

    return(
        <DotLoader size={150} color={colors.green} />
    )
}