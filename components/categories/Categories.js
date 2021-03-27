import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { CheckBox,Switch, StyleSheet, Text, View, Button, Alert } from 'react-native';
// import ToggleSwitch from 'toggle-switch-react-native';
import Category from './Category'

export default function Categories() {

  const [isSelected, setSelection] = useState(false);
  const [categories, setCategories] = useState([]);

  const url = "./mockDB.json"

  const createCategories = () => {
    console.log("There")
    return categories.map((elem,key) => 
        <Category label={elem.label} selected={elem.selected} key={key} />
      )
  }

  useEffect( () => {
    const getData = async () => {
      const response = await fetch(url)
      // const data = await response.json()
      // setCategories(data.json();
      setCategories([{"label": "films","selected": false},{"label": "exercises", "selected": false}])
      console.log(categories)
    } 
    getData()
  },[])
  
  return (
    <View style={styles.container}>
        {categories===[]?<View/>:createCategories()}      
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
