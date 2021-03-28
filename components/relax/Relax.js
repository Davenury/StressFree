import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Clip } from './Clip';
import { SoundPlayerComponent as SoundPlayer } from './SoundPlayer';
import { colors } from '../../services/colors.js';
import { Meme } from './Meme'
import { Breathing } from './Breathing'
import { getHalfWidth } from '../../services/dimensions'

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
            view = <Meme url={promise.data.url} />
            setRelaxView(view)
            break;
          case "clip":
            console.log(promise)
            view = <Clip id={promise.data.url.split("=")[1]} />
            setRelaxView(view)
            break;
          case "music":
            console.log(promise.data)
            view = <SoundPlayer url={promise.data.url}/>
            setRelaxView(view)
            break
          case "breathing":
            console.log(promise.data)
            view = <Breathing instructions={prepareInstructions(promise.data)} onEnd={onEnd}/>
            setRelaxView(view)
            break;
          default:
            setRelaxView(<p>You son of a bitch, you did it! You've broken our system!</p>)
            break;
        }
    }

    const prepareInstructions = (instructions) => {
      let tmpArray = [];
      for(let instructionObject of instructions){
        for(let [type, object] of Object.entries(instructionObject)){
            for(let [key, value] of Object.entries(object)){
                tmpArray.push({key, value})
            }
        }
      }
      tmpArray.push({key: "end", value: 0})
      return tmpArray;
    }

    const onEnd = () => {
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
      width: getHalfWidth()
    },
    button: {
        padding: '40px',
        borderRadius: '50%',
        backgroundColor: colors.green,
        marginTop: "20px",
        marginBottom: "20px",
        width: getHalfWidth()*5/8,
        height: getHalfWidth()*5/8
    },
    buttonText: {
        color: 'white',
        fontSize: '30px',
        userSelect: 'none',
        justifyContent:"center",
        marginTop: "10px",
        textAlign: "center"
    },
    buttonHover: {
        backgroundColor: '#4CAF50'
      },
    back: {
        backgroundColor: '#38a0eb',
        padding: '10px'
    }

  });