import React from 'react';
import SoundPlayer from 'react-native-sound-player';
import DotLoader from "react-spinners/DotLoader";
import { colors } from '../../services/colors';

export function SoundPlayerComponent(props){

    const play = () => {
        try {
            props.listener = SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
                props.onEnd
            })
            console.log(props.url)
            SoundPlayer.playUrl(props.url)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    play()

    return(
        <DotLoader size={150} color={colors.green} />
    )
}