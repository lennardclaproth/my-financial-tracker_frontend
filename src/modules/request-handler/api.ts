import axios, { AxiosError } from "axios";
import https from 'https';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL,
  timeout: 2000,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
