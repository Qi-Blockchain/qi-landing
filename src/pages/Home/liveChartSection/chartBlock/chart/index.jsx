import React, {useEffect, useRef, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import classes from './styles.module.scss';
import ratesApi from "../../../../../services/endpoints/rates";
import {useRecoilValue} from "recoil";
import {chartPeriodState} from "../../../../../store/chartPeriod";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);

const Chart = () => {
    const [chartData, setChartData] = useState([]);
    const [chartLabelData, setChartLabelData] = useState([]);
    const [perElement, setPerElement] = useState(12);
    const [tickData, setTickData] = useState([]);
    const periodValue = useRecoilValue(chartPeriodState);
    const ref = useRef();

    const checkPerElement = () => {
        if (periodValue === '24h') {
            setPerElement(12);
        }

        if (periodValue === 'week') {
            setPerElement(37);
        }

        if (periodValue === 'month') {
            setPerElement(43);
        }

        if (periodValue === '3month') {
            setPerElement(27);
        }

        if (periodValue === '12month') {
            setPerElement(17);
        }
    }

    const getRatesList = async () => {
        try {
          const res = await ratesApi.getRates(periodValue);

          const dataTemp = res.data.data.rates.rateData;
          let ratesData = [];
          let labelData = [];

          dataTemp.forEach((elem, index) => {
              if (index % perElement === 0) {
                  ratesData.push(elem.rate);
                  labelData.push(elem.created_at)
              }
          });

          setChartData(ratesData);
          setChartLabelData(labelData);
      } catch (e) {
          console.log(e)
      }
    }

    useEffect(() => {
        checkPerElement();
    }, [periodValue])

    useEffect(() => {
        getRatesList();
    }, [perElement])

    const options = {
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            },
        },
        responsive: true,
        plugins: {
        },
    };

    const data = {
        labels: chartLabelData,
        datasets: [
            {
                data: chartData,
                lineTension: 0.3,
                fill: true,
                borderColor: (context) => {
                    const colorStart = '#3731B9';
                    const colorEnd = '#FF136D';
                    const ctx = context.chart.ctx;
                    const area = context.chart.chartArea;

                    const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);

                    gradient.addColorStop(0, colorStart);
                    gradient.addColorStop(1, colorEnd);

                    return gradient;
                },
                pointRadius: 0,
            }
        ]
    };

    const setChartTickets = () => {
        const arr = [];
        const ticks = ref.current.scales.y.ticks;
        const ticksSorted = ticks.slice(-5).reverse();

        ticksSorted.forEach((elem) => arr.push(elem.label));

        setTickData(arr);
    }

    useEffect(() => {
        setChartTickets();
    }, [chartData]);


    return (
        <div className={classes.wrapper}>
            <div className={classes.legendWrapper}>
                {tickData.length &&
                    tickData.map((elem, index) => (
                        <div key={'key_' + index} className={classes.legendItem}>{elem}</div>
                    ))
                }
            </div>
            <Line
                ref={ref}
                data={data}
                options={options}
            />
        </div>
    );
};

export default Chart;