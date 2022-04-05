import React from 'react';
import { PieChart, Pie, ResponsiveContainer, } from 'recharts';

const data = [
  {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
  },
  {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
  },
  {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
  },
  {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
  },
  {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
  },
  {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
  }
];

export default function piechart() {
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width={800} height={700}>
          <Pie
            dataKey="investment"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="sell"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }

