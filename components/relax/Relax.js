import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { Clip } from './Clip';
import { SoundPlayerComponent as SoundPlayer } from './SoundPlayer';
import { colors } from '../../services/colors.js';
import { Meme } from './Meme';
import { Breathing } from './Breathing';
import { getHalfWidth, getHeight } from '../../services/dimensions';

export function Relax({handleClick}) {

  const relax = async () => {
    let promise = await handleClick()
    parseResponse(promise)
  }   

  let view;

    const [relaxView, setRelaxView] = useState(<View style={styles.container}></View>)

    const parseResponse = (promise) => {
        switch(promise.category){
          case "meme":
            view = <Meme url={promise.data.url}/>
            setRelaxView(view)
            break;
          case "clip":
            view = <Clip id={promise.data.url.split("=")[1]}/>
            setRelaxView(view)
            break;
          case "music":
            setRelaxView(<View style={styles.container}></View>)
            view = <SoundPlayer url={promise.data.url}/>
            setRelaxView(view)
            break
          case "breathing":
            view = <Breathing instructions={prepareInstructions(promise.data)} onEnd={onEnd}/>
            setRelaxView(view)
            break;
          case "landscape":
            view = <Meme url={promise.data.url}/>
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
      setRelaxView(<View style={styles.container}></View>)
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {relaxView}
        </ScrollView> 
        <Pressable onPress={relax}>
          <View
            style={styles.button}
          >
          <Text style={styles.buttonText}>Relax</Text>
          </View>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: getHeight() - 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: 'flex-end',
      width: "100%"
    },
    button: {
        padding: '40px',
        borderRadius: '50%',
        backgroundColor: colors.green,
        marginTop: "20px",
        marginBottom: "20px",
        width: "160px",
        height: "160px"
    },
    buttonText: {
        color: 'white',
        fontSize: '26px',
        userSelect: 'none',
        justifyContent:"center",
        marginTop: "20px",
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