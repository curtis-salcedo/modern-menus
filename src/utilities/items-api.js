import sendRequest from "./send-request";
const BASE_URL = '/api/items';

// Create a new menu
export function createItem(itemFormData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', itemFormData);
}