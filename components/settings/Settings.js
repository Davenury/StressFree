import { TextField, Button, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet,Switch, Text, View} from 'react-native';
import TimeInput from 'material-ui-time-picker';
import { getData, storeData } from '../../services/Storage';

export function Settings(props){

    const [email, setEmail] = useState("")
    const [time, setTime] = useState(new Date())
    const [toSave, setToSave] = useState({
        time: time,
        email: email
    })

    const storageKey = "Settings"

    useEffect(() => {
        getData(storageKey)
            .then(response => {
                if(response){
                    console.log(response)
                    setEmail(response.email)
                    setTime(new Date(response.time))
                    console.log(toSave.email, toSave.time)
                }
            })
    }, [])

    const handleEmailChange = ({target}) => {
        setEmail(target.value)
        setToSave({
            time: time,
            email: target.value
        })
    }

    // const connectToGoogleCalendar = () => {
    //     console.log("Connected to Google Calendar")
    // }

    const handleTimeChange = (time) => {
        setTime(time)
        setToSave({
            time: time,
            email: email
        })
    }

    const handleSave = () => {
        console.log(toSave)
        setToSave({
            time: time,
            email: email
        })
        storeData(storageKey, toSave)
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
                {/* <Box m={1} p={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={connectToGoogleCalendar}
                    >
                        Connect to Google Calendar!
                    </Button>
                </Box> */}
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