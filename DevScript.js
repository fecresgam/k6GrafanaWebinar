import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://192.168.1.65:1234');
  sleep(1);
}
