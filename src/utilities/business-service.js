import * as businessAPI from './business-api';
import * as menusAPI from './menus-api';
import * as itemsAPI from './items-api';
import * as displaysAPI from './displays-api';

export async function getBusiness() {
  const business = await businessAPI.getBusiness()
  return business
}

export async function createBusiness(formData) {
  const newBusiness = await businessAPI.createBusiness(formData)
  return newBusiness
}

export async function index(businessId) {
  const business = await businessAPI.index(businessId)
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

// Get menu detail
export async function getMenuDetail(menuId) {
  const menuDetail = await menusAPI.show(menuId)
  return menuDetail
}

// Delete menu
export async function deleteMenu(menuId) {
  const deleteMenu = await menusAPI.deleteMenu(menuId)
  return deleteMenu
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

// Update item data
export async function updateItem(itemFormData) {
  const updateItem = await itemsAPI.updateItem(itemFormData)
  return updateItem
}

// Get item detail
export async function getItemDetail(itemId) {
  const itemDetail = await itemsAPI.show(itemId)
  return itemDetail
}

// Delete item
export async function deleteItem(itemId) {
  const deleteItem = await itemsAPI.deleteItem(itemId)
  return deleteItem
}

// Logic and Business functions
// Create display template
export function generateTemplate(count) {
  const template = [];
  for (let i = 0; i <= 11; i++) {
    const item = {
      displayItems: null,
      position: index+1,
      style: {
        backgroundColor: "",
        color: ""
      }
    }
    template.push(item)
  }
  return template;
}

// Create a new template
export async function createTemplate(templateFormData) {
  const newTemplate = await displaysAPI.createTemplate(templateFormData)
  return newTemplate
}