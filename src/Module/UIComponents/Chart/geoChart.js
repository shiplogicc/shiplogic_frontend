import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ['State Code', 'State', 'Population'],
    ['IN-UT', 'Uttarakhand', 9087],
    ['IN-AP', 'AP & Telangana', 1000],
    ['IN-UP', 'Uttar Pradesh', 10000],
    ['IN-HR', 'Haryana', 2000],
    ['IN-DL', 'Delhi', 1000]
];

export function GeoChart() {
    const options = {
        region: "IN",
        displayMode: 'regions',
        resolution: 'provinces',
    }
    return (
        <Chart
            options={options}
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
        />
    );
}
