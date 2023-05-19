import sendRequest from "./send-request";
const BASE_URL = '/api/business';

// Create a user business
export async function create(formData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', formData);
}

// Retrieve user business
export function getBusiness() {
  return sendRequest(`${BASE_URL}`);
}