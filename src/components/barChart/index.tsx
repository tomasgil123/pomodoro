import React from 'react'

import { FlexibleXYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis'

//types
import { GraphDataPoint, Domain } from 'src/types/graph'

interface Props {
  dataGraph: GraphDataPoint[]
  xDomain: Domain
  yDomain: Domain
}

const BarChart = ({ dataGraph, xDomain, yDomain }: Props): JSX.Element => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <FlexibleXYPlot xDomain={xDomain} yDomain={yDomain} xType={'ordinal'} animation={true}>
        <VerticalBarSeries data={dataGraph} stack={false} />
        <XAxis />
        <YAxis />
      </FlexibleXYPlot>
    </div>
  )
}

export default BarChart
