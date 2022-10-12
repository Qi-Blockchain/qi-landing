import {api} from '../axios';

const ratesApi = {
    getRates: (period) => api.get(`rates?period=` + period),
};

export default ratesApi;