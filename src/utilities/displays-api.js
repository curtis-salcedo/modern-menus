import sendRequest from "./send-request";
const BASE_URL = '/api/displays';

// Create a new template
export function createTemplate(displayFormData) {
  console.log(displayFormData)
  return sendRequest(`${BASE_URL}/create`, 'POST', displayFormData);
}