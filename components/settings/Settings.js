import { TextField, Button, Box } from '@material-ui/core';
import React, {useState} from 'react';
import { StyleSheet,Switch, Text, View} from 'react-native';
import {TimePicker} from '@material-ui/pickers';

export function Settings(props){

    const [email, setEmail] = useState("")
    const [time, setTime] = useState(new Date())

    const handleEmailChange = ({target}) => {
        console.log(target.value)
        setEmail(target.value)
    }

    const connectToGoogleCalendar = () => {
        console.log("Connected to Google Calendar")
    }

    return(
        <View style={styles.container}>
            <Box style={{display: "flex-box"}}>
            <Box m={1} p={1}>
                <TextField 
                    label="E-mail"
                    id="email"
                    onChange={handleEmailChange}
                    value={email}
                />
            </Box>
            <Box m={1} p={1}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={connectToGoogleCalendar}
                >
                    Connect to Google Calendar!
                </Button>
            </Box>
            <Box m={1} p={1}>
                
            </Box>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });