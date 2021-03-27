import React, { useState, useEffect } from 'react';
import { CheckBox,Switch, StyleSheet, Text, View, Button, Alert,AsyncStorage } from 'react-native';
import Category from './Category'

export default function Categories() {

  const [categories, setCategories] = useState([]);

  const url = "https://stress-free.herokuapp.com/getCategories";

  const createCategories = () => {
    return categories.map((elem,key) => 
        <Category label={elem.name} selected={true} key={key} />
      )
  }

  useEffect( () => {
    const getData = async () => {
      console.log("here")
      fetch(url)
        .then(response => response.json())
        .then(data => setCategories(data.categories))
        .catch(err => console.log(err))
      // setCategories([{"label": "films","selected": false},{"label": "exercises", "selected": false}])
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
