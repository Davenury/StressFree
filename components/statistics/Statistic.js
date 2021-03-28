import React, { useEffect, useState } from 'react';
import { LineChart } from "react-native-chart-kit";
import { View } from 'react-native';
import { Box, Typography, Card, CardContent } from '@material-ui/core';
import { shadows } from '@material-ui/system';

const chartConfig = {
  backgroundGradientFrom: "##08130D",
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(240, 230, 230, ${opacity})`,
  barPercentage: 0.5
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function Statistic(props){

    let data = {
      labels: [],
      datasets: [
        {
          data: []
        },
      ]
    }

    const [month, setMonth] = useState(monthNames[2])

    const prepareData = () => {
      let array = props.count
      array.sort((a, b) => new Date(a.created_on) - new Date(b.created_on))
        .forEach( count => {
            data.labels.push(count.created_on)
            data.datasets[0].data.push(Number(count.count));
          }
        )
    }

    const getMonth = () => {
      let date = new Date(data.labels[0])
      setMonth(monthNames[date.getMonth()])
    }

    prepareData()
    
    useEffect(() => {
      getMonth()
    }, [])

    return(
      <View>
        <Box m={2} boxShadow={3}>
          { data.datasets[0].data ? <Card variant="outlined">
      <CardContent><LineChart
            data={data}
            width={300}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            fromZero={true}
            xAxisLabel={month}
            bezier
          />
          <Typography style={{textAlign: "center"}}>{capitalizeFirstLetter(props.category)} in {month}</Typography>
          </CardContent></Card> : <p></p>
        }
        </Box>
      </View>
    )
}