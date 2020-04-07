import axios from 'axios';
import { COMMIC_CLAN_BASE_URL } from '../constants/constants';
import config from "../config/config";

const axiosInstance = axios.create({
    baseURL: COMMIC_CLAN_BASE_URL,
    headers: {'Authorization': `Bearer ${config.api.authHeader}`},
});

export default axiosInstance;