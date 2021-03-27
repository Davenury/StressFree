import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Switch, Text, View} from 'react-native';

export default function Category({label,selected, handleChange}) {

  const [isSelected, setSelection] = useState(selected);

  const changeSelection = (value) => {
    setSelection(value)
    handleChange(label,value)
  }
  
  
  return (
    <View style={styles.checkboxContainer}>
        <Switch 
        onValueChange = {changeSelection}
        value = {isSelected}
        style={styles.checkbox}
        />
        <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width:"100%"
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    alignSelf: "flex-end",
    margin: 8,
  },
});
