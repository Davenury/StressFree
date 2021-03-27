import { TextField, Button, Box } from '@material-ui/core';
import React, {useState} from 'react';
import { StyleSheet,Switch, Text, View} from 'react-native';
import TimeInput from 'material-ui-time-picker';

export function Settings(props){

    const [email, setEmail] = useState("")
    const [time, setTime] = useState(new Date())
    const [toSave, setToSave] = useState({})

    const handleEmailChange = ({target}) => {
        setEmail(target.value)
        setToSave({
            ...toSave,
            "email": target.value
        })
    }

    const connectToGoogleCalendar = () => {
        console.log("Connected to Google Calendar")
    }

    const handleTimeChange = (time) => {
        setTime(time)
        setToSave({
            ...toSave,
            "time": time
        })
    }

    const handleSave = () => {
        console.log(toSave)
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
                <TimeInput
                    mode='24h'
                    value={time}
                    onChange={time => handleTimeChange(time)}
                />
                </Box>
                <Box m={1} p={1}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleSave}
                    >Save</Button>
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