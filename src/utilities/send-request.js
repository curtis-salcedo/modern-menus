import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
    console.log(payload)
  }
  const token = getToken();
  if (token) {
    // Need to add an Authorization header
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  // if res.ok is false send error log
  throw new Error('Bad Request');
}
