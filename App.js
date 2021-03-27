import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Relax} from './components/relax/Relax';
import {Settings} from './components/settings/Settings';

export default function App() {

  const [toggled, setToggled] = useState(false)
  const [value, setValue] = useState(0)

  const toggleButton = () => {
    setToggled(!toggled)
  }

  const getTextForButton = () => {
    if(toggled)
      return "Push me!"
    return "Ouch!"
  }

  const getFragment = () => {
    let fragment;
    switch(value){
      case 0:
        fragment = <Relax />
        break;
      case 1:
        fragment = <Categories />
        break;
      case 2:
        fragment = <Settings />
        break;
      default:
        fragment = <Relax />
        break;
    }
    return fragment;
  }

  return (
    <View style={styles.container}>
      {getFragment()}
      <StatusBar style="auto" />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        style={{width: "100%", backgroundColor: "#fafafa", fontSize: "16px"}}>
        <BottomNavigationAction label="Relax!" />
        <BottomNavigationAction label="Categories" />
        <BottomNavigationAction label="Settings" />
      </BottomNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh"
  }
});
