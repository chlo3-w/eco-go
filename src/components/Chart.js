import React from 'react'
import { View } from "react-native";
import { Path } from 'react-native-svg'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default function Chart() {
    
    const data = [ 50, 10, 40, 50, 20, 24, 50, 75, 50, 53, 53, 24 ]

        const Line = ({ line }) => (
                 <Path
                     key={'line'}
                     d={line}
                     stroke={'rgb(255, 255, 255)'}
                     fill={'none'}
                />
             )

        return (
            <View>
                <AreaChart
                    style={{ height: 200 }}
                    data={data}
                    contentInset={{ top: 46, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: 'rgba(255, 255, 255, 0.2)' }}
                >
                    <Grid 
                        svg={{fillOpacity:0.1, strokeOpacity: 0.3}}
                    />
                    <Line/>
                </AreaChart>
            </View>
        )
    }
