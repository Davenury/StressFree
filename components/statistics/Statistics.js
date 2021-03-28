import React, { useEffect } from 'react';
import { Statistic } from './Statistic'

export function Statistics(){

    useEffect(() => {
        fetch(url + "/counts")
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return(
        <p>Statistics</p>
    )
}