import sendRequest from "./send-request";
const BASE_URL = '/api/business';

// Create a user business
export async function createBusiness(formData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', formData);
}

// Retrieve user business
export function getBusiness() {
  return sendRequest(BASE_URL);
}

export async function index(businessId) {
  return sendRequest(`${BASE_URL}/${businessId}`)
}

// Create a new item
export async function createItem(itemFormData) {
  const newItem = await createItem(itemFormData)
  return newItem
}