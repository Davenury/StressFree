import React, { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
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
      if (messageIndex < messages.length - 1) {
        timeout = setTimeout(() => setMessageIndex(messageIndex + 1), messages[messageIndex].value * 1000);
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [messages, messageIndex]);

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
        <View style={{width: "300px", height: "400px"}}>
            <Box style={{width:"50%", margin: "auto", marginRight: "100px"}}>
                <RingLoader loading={true} color={colors.green} size={170}/>
            </Box>
            <Box style={{marginTop: "200px"}}>
                <Loader messages={props.instructions} onEnd={props.onEnd}/>
            </Box>
        </View>
    )
} 
