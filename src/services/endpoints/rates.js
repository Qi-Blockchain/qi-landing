import {api} from '../axios';

const ratesApi = {
    getRates: (period) => api.get(`/rates/` + period),
};

export default ratesApi;
