import sendRequest from "./send-request";
const BASE_URL = '/api/menus';

// Create a new menu
export function createMenu(menuFormData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', menuFormData);
}

// Retrieve menus for user
export async function getMenus() {
  return sendRequest(`${BASE_URL}/get`);
}

// Update menus
export async function updateMenu() {
  return sendRequest(`${BASE_URL}/update`)
}

// Get details of the menu
export async function show(menuId) {
  return sendRequest(`${BASE_URL}/${menuId}`);
}

// Delete menu
export async function deleteMenu(menuId) {
  console.log(menuId)
  return sendRequest(`${BASE_URL}/${menuId}`, 'DELETE')
}