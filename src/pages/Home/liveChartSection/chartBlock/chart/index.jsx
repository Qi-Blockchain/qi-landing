import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import classes from './styles.module.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);

const Chart = () => {

    const options = {
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        responsive: true,
        plugins: {
        },
    };

    const data = {
        labels: ['1 Сен, 12:01', '2 Сен, 12:01', '3 Сен, 12:01', '4 Сен, 12:01', '5 Сен, 12:01', '6 Сен, 12:01', '7 Сен, 12:01', '8 Сен, 12:01', '9 Сен, 12:01', '10 Сен, 12:01', '11 Сен, 12:01', '12 Сен, 12:01', '13 Сен, 12:01', '14 Сен, 12:01', '15 Сен, 12:01', '16 Сен, 12:01', '17 Сен, 12:01', '18 Сен, 12:01'],
        datasets: [
            {
                data: [0.11, 0.15, 0.13, 0.13, 0.11, 0.14, 0.11, 0.11, 0.13, 0.13, 0.14, 0.15, 0.13, 0.12, 0.11, 0.12, 0.11, 0.14, 0.15],
                lineTension: 0.3,
                fill: true,
                borderColor: '#FF136D',
                pointRadius: 0,
            }
        ]
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.legendWrapper}>
                <div className={classes.legendItem}>0.11</div>
                <div className={classes.legendItem}>0.12</div>
                <div className={classes.legendItem}>0.13</div>
                <div className={classes.legendItem}>0.14</div>
                <div className={classes.legendItem}>0.15</div>
            </div>
            <Line
                data={data}
                options={options}
            />
        </div>
    );
};

export default Chart;