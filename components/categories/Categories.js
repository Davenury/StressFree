import React, { useState, useEffect } from 'react';
import { CheckBox,Switch, StyleSheet, Text, View } from 'react-native';
import { Button } from '@material-ui/core';

export default function Categories(props) {

  
  return (
    <View style={styles.container}>
        {props.categories===[]?<View/>:props.createCategories()}      
        <Button
          variant="contained"
          color="primary"
          onClick={props.savePreferences}
        >
          Save preferences
        </Button>
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
