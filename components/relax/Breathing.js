import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { colors } from '../../services/colors';
import { View } from 'react-native';

export function Breathing(){

    const [instruction, setInstruction] = useState("")

    return(
        <View>
            <BounceLoader loading={true} color={colors.green} size={150}/>
            <p>{instruction}</p>
        </View>
    )
} 
