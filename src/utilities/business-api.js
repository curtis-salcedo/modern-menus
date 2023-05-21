import sendRequest from "./send-request";
const BASE_URL = '/api/business';

// Create a user business
export async function createBusiness(formData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', formData);
}

// Retrieve user business
export async function getBusiness() {
  return sendRequest(BASE_URL);
}

export async function index() {
  return sendRequest(`${BASE_URL}/index`)
}

// Create a new item
export async function createItem(itemFormData) {
  const newItem = await createItem(itemFormData)
  return newItem
}