import React, { useEffect, useState } from 'react';
import { Statistic } from './Statistic'
import { ScrollView } from 'react-native'

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
        <ScrollView>
            { counts ? prepareCounts() : <p></p> }
        </ScrollView>
    )
}