import sendRequest from "./send-request";
const BASE_URL = '/api/displays';

// Create a new template
export function createTemplate(displayFormData) {
  console.log(displayFormData)
  return sendRequest(`${BASE_URL}/create`, 'POST', displayFormData);
}

// Retrieve user template
export async function getTemplate() {
  return sendRequest(`${BASE_URL}/get`);
}

// Update user template
export async function updateTemplate(templateData) {
  return sendRequest(`${BASE_URL}/:id/update`, 'PUT', templateData);
}