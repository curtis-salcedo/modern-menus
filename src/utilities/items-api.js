import sendRequest from "./send-request";
const BASE_URL = '/api/items';

// Create a new menu
export function createItem(itemFormData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', itemFormData);
}

// Retrieve user items
export async function getItems() {
  return sendRequest(`${BASE_URL}/get`);
}

// Update user items
export async function updateItem() {
  return sendRequest(`${BASE_URL}/update`);
}