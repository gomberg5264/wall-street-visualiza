import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  AreaChart,
  Area
} from 'recharts';
import styled from 'styled-components';

const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const Chart = ({ data, title }) => {
  return (
    <section className="section">
      <div className="container">
        <Title className="title">{title}</Title>
        <div className="box">
          <LineChart
            width={1000}
            height={600}
            data={data}
            margin={{ top: 10, right: 100, bottom: 50, left: 50 }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={false}
              strokeDasharray="5 5"
            />
            <XAxis
              dataKey="date"
              label={{ value: 'Time', position: 'insideBottom', offset: 0 }}
            />
            <YAxis
              domain={['auto', 'auto']}
              label={{
                value: 'Stock Prices',
                angle: -90,
                position: 'insideLeft',
                offset: -7
              }}
            />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              wrapperStyle={{
                borderColor: 'blue',
                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)'
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: 'black' }}
              offset={10}
            />
            <Line
              dataKey="price"
              stroke="#ff7300"
              activeDot={{ stroke: 'red', strokeWidth: 12, r: 2 }}
              isAnimationActive={true}
              animationBegin={0}
              animationEasing={'linear'}
            />
            <Brush dataKey="date" startIndex={0}>
              <AreaChart>
                <CartesianGrid />
                <YAxis hide domain={['auto', 'auto']} />
                <Area
                  dataKey="price"
                  stroke="#ff7300"
                  fill="#ff7300"
                  dot={false}
                />
              </AreaChart>
            </Brush>
          </LineChart>
        </div>
      </div>
    </section>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Chart;
