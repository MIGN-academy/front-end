import {atom} from "nanostores";
import axios from "axios";

const DOMAIN_URL = 'http://127.0.0.1:8000'

export const domain = atom(DOMAIN_URL)
export const $client = atom(axios.create({
    xsrfCookieName: 'csrftoken',
    baseURL: DOMAIN_URL,
}))

export type User = {
    email: string
    user_id: string
}

const anonymousUser = {email: 'anonymous', user_id: ''}

export const $user = atom<User>(anonymousUser)

export function addUser(user: User) {
    $user.set(user)
}