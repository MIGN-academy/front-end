import {atom} from "nanostores";
import axios from "axios";

const DOMAIN_URL = 'http://127.0.0.1:8000'

export const domain = atom(DOMAIN_URL)
export const client = atom(axios.create({
    xsrfCookieName: 'csrftoken',
    baseURL: DOMAIN_URL,
}))