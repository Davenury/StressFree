import React, { useState, useEffect } from 'react';
import { CheckBox,Switch, StyleSheet, Text, View } from 'react-native';
import { Button } from '@material-ui/core';
import Category from './Category'
import {getData,storeData} from '../../services/Storage'

export default function Categories() {

  const [categories, setCategories] = useState([]);

  
  const handleChange = (label,value) => {
    const category = categories.filter(elem=> elem.label === label)[0]
    category.selected = value
    setCategories(categories)
  }

  const createCategories = () => {
    return categories.map((elem,key) => 
        <Category label={elem.label} selected={elem.selected} handleChange={handleChange} key={key} />
      )
  }

  const savePreferences = () => {
    categories.forEach(elem =>  storeData(elem.label,elem.selected))
  }

  useEffect( () => {
    const fetchData = async () => {
      // const response = await fetch(url)
      // const data = await response.json()
      // setCategories(data.json();
      const data = ["films","exercises"]
      const promises = data.map(elem => getData(elem))
      Promise.all(promises).then(arr =>
          setCategories(arr.map((elem,idx) => {
            const value = elem===null?true:elem;
            return {"label": data[idx], "selected":value}
          }))
      )
    } 
    fetchData()
  },[])
  
  return (
    <View style={styles.container}>
        {categories===[]?<View/>:createCategories()}      
        <Button
          variant="contained"
          color="primary"
          onClick={savePreferences}
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
