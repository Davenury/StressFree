import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

export function Relax() {

    const [show, setShow] = useState(true)

    const relax = (source) => {
        console.log("I will relax your li'l brains");
        setShow(!show)
      }  



    var toRender = show ? <Pressable onPress={relax} visible={show}>
    <View
    visible={show}
    style={styles.button}
    >
    <Text style={styles.buttonText}>Relax</Text>
    </View>
 </Pressable> : <Pressable onPress={relax} visible={show}>
 <View
 visible={show}
 style={styles.back}
 >
 <Text style={styles.buttonText}>Go back</Text>
 </View>
</Pressable>
    return (
      <View style={styles.container}>
      {toRender}
      <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        padding: '40px',
        borderRadius: '50%',
        backgroundColor: '#38eb38',
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
        padding: '10px',
    }

  });