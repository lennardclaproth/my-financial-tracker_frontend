import axios, { AxiosError } from "axios";
import https from 'https';

const baseURL = process.env.BASE_URL;

export const api = axios.create({
  baseURL,
  timeout: 2000,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
