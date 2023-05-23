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
export async function updateItem(itemFormData) {
  return sendRequest(`${BASE_URL}/:id/update`, 'PUT', itemFormData);
}

// Item index for editing, updating and deleting
export async function show(itemId) {
  return sendRequest(`${BASE_URL}/${itemId}`);
}

// Delete item
export async function deleteItem(itemId) {
  console.log(itemId)
  return sendRequest(`${BASE_URL}/${itemId}/delete`, 'DELETE', itemId)
}