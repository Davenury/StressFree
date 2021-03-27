import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Clip } from './Clip';
import { SoundPlayerComponent as SoundPlayer } from './SoundPlayer';
import { colors } from '../../services/colors.js';

export function Relax({handleClick}) {

  const relax = async () => {
    console.log("I will relax your li'l brains");
    let promise = await handleClick()
    parseResponse(promise)
  }   

  let view;

    const [relaxView, setRelaxView] = useState(null)

    const parseResponse = (promise) => {
        switch(promise.category){
          case "meme":
            console.log(promise.data.url)
            setRelaxView(<View>
              <img src={promise.data.url}
               style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}/>
            </View>)
            break;
          case "clip":
            console.log(promise)
            view = <Clip id={promise.data.url.split("=")[1]} />
            setRelaxView(view)
            break;
          case "music":
            console.log(promise.data)
            view = <SoundPlayer url={promise.data.url} onEnd={onEndOfPlaying} listener={listener}/>
            setRelaxView(view)
            break
          case "breathing":
            view = <Breathing />
            setRelaxView(view)
            break;
          default:
            setRelaxView(<p>You son of a bitch, you did it! You've broken our system!</p>)
            break;
        }
    }

    let listener;

    const onEndOfPlaying = () => {
      if(listener) listener.remove()
      setRelaxView(null)
    }

    return (
      <View style={styles.container}>
        <Pressable onPress={relax}>
          <View
          style={styles.button}
          >
          <Text style={styles.buttonText}>Relax</Text>
          </View>
        </Pressable>
        {relaxView}
      <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
    },
    button: {
        padding: '40px',
        borderRadius: '50%',
        backgroundColor: colors.green,
        marginTop: "20px",
        marginBottom: "20px"
    },
    buttonText: {
        color: 'white',
        fontSize: '24px',
        userSelect: 'none',
    },
    buttonHover: {
        backgroundColor: '#4CAF50'
      },
    back: {
        backgroundColor: '#38a0eb',
        padding: '10px'
    }

  });