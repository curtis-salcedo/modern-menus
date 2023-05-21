import * as businessAPI from './business-api';
import * as menusAPI from './menus-api';
import * as itemsAPI from './items-api';

export async function getBusiness() {
  const business = await businessAPI.getBusiness()
  return business
}

export async function createBusiness(formData) {
  const newBusiness = await businessAPI.createBusiness(formData)
  return newBusiness
}

export async function index() {
  const business = await businessAPI.index()
  return business
}

// Create a new menu
export async function createMenu(menuFormData) {
  const newMenu = await menusAPI.createMenu(menuFormData)
  return newMenu
}

// Get menus
export async function getMenus() {
  const menuList = await menusAPI.getMenus()
  return menuList
}

// Update menu data
export async function updateMenu() {
  const updateMenu = await menusAPI.updateMenu()
  return updateMenu
}

// Create a new item
export async function createItem(itemFormData) {
  const newItem = await itemsAPI.createItem(itemFormData)
  return newItem
}

// Get items
export async function getItems() {
  const itemList = await itemsAPI.getItems()
  return itemList
}

// Update menu data
export async function updateItem() {
  const updateItem = await itemsAPI.updateItem()
  return updateItem
}