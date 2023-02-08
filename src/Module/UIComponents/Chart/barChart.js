import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit", "Test", "GGG"],
  ["2014", 1000, 400, 200, 200, 200],
  ["2015", 1170, 460, 250, 250, 250],
  ["2016", 660, 1120, 300, 300, 300],
  ["2017", 1030, 540, 350, 350, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
