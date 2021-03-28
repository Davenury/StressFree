import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Relax} from './components/relax/Relax';
import {Settings} from './components/settings/Settings';
import Categories from './components/categories/Categories';
import {getData,storeData} from './services/Storage';
import Category from './components/categories/Category';
import {Statistics} from './components/statistics/Statistics';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EqualizerIcon from '@material-ui/icons/Equalizer';

export default function App() {

  const [value, setValue] = useState(0)
  const [categories, setCategories] = useState([]);

  const url = "https://stress-free.herokuapp.com/";
  
  const handleCategoryChange = (label,value) => {
    const category = categories.filter(elem=> elem.label === label)[0]
    category.selected = value
    setCategories(categories)
  }

  const getRandomCategory = () => {
    let filteredCategories = categories.filter(category => category.selected)
    return filteredCategories[Math.floor(Math.random() * filteredCategories.length)]
  }

  const createCategories = () => {
    return categories.map((elem,key) => 
        <Category label={elem.label} selected={elem.selected} handleChange={handleCategoryChange} key={key} />
      )
  }

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch(url + "categories");
      let data = await response.json().then(d => d.categories)
      const promises = data.map(elem => getData(elem.name))
      Promise.all(promises).then(arr =>
          setCategories(arr.map((elem,idx) => {
            const value = elem===null?true:elem;
            return {"label": data[idx].name, "selected":value, "endpoint": data[idx].endpoint}
          }))
      )
    } 
    fetchData()
  },[])

  const savePreferences = () => {
    categories.forEach(elem =>  storeData(elem.label,elem.selected))
  }

  const getFragment = () => {
    let fragment;
    switch(value){
      case 0:
        fragment = <Relax handleClick={handleClick} />
        break;
      case 1:
        fragment = <Categories
          savePreferences={savePreferences}
          createCategories={createCategories}
          categories={categories}/>
        break;
      case 2:
        fragment = <Statistics />
        break;
      default:
        fragment = <Relax handleClick={handleClick}/>
        break;
    }
    return fragment;
  }

  const handleClick = async () => {
    let randomCategory = getRandomCategory()
    let response = await fetch(url + randomCategory.endpoint)
    let data = await response.json()
    return {
      data: data,
      category: randomCategory.endpoint
    }
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
        <BottomNavigationAction label="Relax!" icon={<HomeIcon />}/>
        <BottomNavigationAction label="Categories" icon={<FormatListBulletedIcon/>}/>
        <BottomNavigationAction label="Statistics" icon={<EqualizerIcon/>}/>
      </BottomNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
