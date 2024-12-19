import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 200000,
};

export default function () {
    http.post('https://api.starboardsocial.nl/auth/refresh');
    sleep(0.1);
}

