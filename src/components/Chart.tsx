import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface ChartsProps {
    options: object;
}

function Chart({options}: ChartsProps) {
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default Chart