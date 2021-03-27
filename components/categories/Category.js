import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Switch, Text, View} from 'react-native';

export default function Category({label,selected}) {

  const [isSelected, setSelection] = useState(selected);
  
  return (
    <View style={styles.checkboxContainer}>
        <Switch 
        onValueChange = {setSelection}
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
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
