import {atom} from "recoil";

const chartPeriodState = atom({
    key: 'chartPeriod',
    default: '24h',
});

export {chartPeriodState};