import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
    switch(value){
      case 0:
        <Relax />
        break;
      case 1:
        <Categories />
        break;
      case 2:
        <Settings />
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title={getTextForButton()}
        onPress={toggleButton}
      />
      <StatusBar style="auto" />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        style={{width: "100%", backgroundColor: "#fafafa", fontSize: "16px"}}>
        <BottomNavigationAction label="Relax!" />
        <BottomNavigationAction label="Cetegories" />
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
