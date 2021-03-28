import React, { useEffect, useState } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { colors } from '../../services/colors';
import { View } from 'react-native';
import { Box, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const instructions = {
    in: "Take a deep breath...",
    pause: "Hold it...",
    out: "Breath out...",
    end: "End"
}

const Loader = props => {
    const { messages } = props;
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
      let timeout;
      console.log(messageIndex)
      if (messageIndex < messages.length - 1) {
        timeout = setTimeout(() => setMessageIndex(messageIndex + 1), messages[messageIndex].value * 1000);
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [messages, messageIndex]);
  
    console.log(messages)

    return( <View>
        <Box m={2} p={1} style={{textAlign: "center"}}>
        <Typography variant="h4" component="h4">
            {instructions[messages[messageIndex].key]}
        </Typography>
        </Box>
        {messages[messageIndex].key === "end" ? <Button variant="contained" color="secondary" onClick={props.onEnd}>End</Button> : <p></p> }
        </View>
    )
};

export function Breathing(props){

    return(
        <View>
            <Box m={2} p={1} style={{marginLeft: "auto", marginRight: "auto"}}>
                <BounceLoader loading={true} color={colors.green} size={200}/>
            </Box>
            <Loader messages={props.instructions} onEnd={props.onEnd}/>
        </View>
    )
} 
