import * as businessAPI from './business-api';
import * as menusAPI from './menus-api';
import * as itemsAPI from './items-api';

export async function getBusiness() {
  const business = await businessAPI.getBusiness()
  return business
}

export async function createBusiness(formData) {
  const newBusiness = await businessAPI.createBusiness(formData)
  return newBusiness;
}

// Create a new menu
export async function createMenu(menuFormData) {
  const newMenu = await menusAPI.createMenu(menuFormData)
  return newMenu
}

// Create a new item
export async function createItem(itemFormData) {
  const newItem = await itemsAPI.createItem(itemFormData)
  return newItem
}

export async function index() {
  const business = await businessAPI.index()
}
