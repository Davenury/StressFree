import React, { useEffect, useState } from 'react';
import { Statistic } from './Statistic'
import { ScrollView, View, StyleSheet } from 'react-native'
import {getHeight} from '../../services/dimensions'

const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
};

export function Statistics(props){

    const [counts, setCounts] = useState([])

    useEffect(() => {
        fetch(props.url + "counts")
            .then(response => response.json())
            .then(data => setCounts(data.counts))
    }, [])

    const prepareCounts = () => {
        return Object.entries(groupBy(counts, 'category'))
            .map((count, key) => <Statistic key={key} category={count[0]} count={count[1]}/>)
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                { counts ? prepareCounts() : <p></p> }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: getHeight() - 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: 'flex-end',
      width: "100%"
    },
  })