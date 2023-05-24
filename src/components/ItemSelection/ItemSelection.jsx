import ItemForm from '../ItemForm/ItemForm';
import ItemDetail from '../ItemDetail/ItemDetail';
import BusinessContext from '../../utilities/BusinessContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as menusAPI from '../../utilities/menus-api';

import Draggable, {DraggableCore} from 'react-draggable';

import './ItemSelection.css'

export default function ItemSelection({ user, menus, itemList, handleCloseItemList, handleAddItemToDisplayIndex }) {
  const { business, setBusiness } = useContext(BusinessContext)
  const [items, setItems] = useState(null)
  // const [menus, setMenus] = useState(menus)
  const [ selectedItem, setSelectedItem ] = useState(null)
  const [ showItemForm, setShowItemForm ] = useState(false)
  const [ selectedMenu, setSelectedMenu ] = useState(null)
  const [ showMenuForm, setShowMenuForm ] = useState(false)
  const [ sort, setSort ] = useState('name')
  const [ filter, setFilter ] = useState('')
  const navigate = useNavigate();

  // Fetch items that match logged in user
  useEffect(() => {
    const fetchItems = async () => {
      if (menus) {
        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        setItems(userItems)
      }
    }
    fetchItems()
  }, [menus])

  // Item event changes
  function handleItemDetail(itemId) {
    setSelectedItem(itemId);
    navigate(`/items/${itemId}`)
  }

  function handleAddItemButton() {
    setShowItemForm(true)
  }

  function handleAddItemClose() {
    setShowItemForm(false)
  }

  // Item table sort and filter functions
  // Sort by name filter
  const handleSortEvent = (evt) => {
    setSort(null)
  }

  // Sort by filtering different options
  const handleFilterEvent = (evt) => {
    setFilter(null)
  }
  
  // Menu specific handles
  function handleMenuDetail(menuId) {
    console.log(menuId)
    setSelectedMenu(menuId);
    navigate(`/menus/${menuId}`)
    }
  
    // function handleShowMenuForm() {
    //   setShowMenuForm(true)
    // }
  
    // function handleCloseMenuForm() {
    //   setShowMenuForm(false)
    // }


  return (
    <div className="ItemListContainer">

      { itemList ?
      <div className="ItemListItems">

      {/* { showItemForm && (
        <div><ItemForm user={user} menus={menus} handleAddItemClose={handleAddItemClose} /></div>
      )} */}

        <div className="ItemSelectionContainer">
        <button onClick={handleCloseItemList}>Close</button>
          <table className="">
            <thead>
              <tr className="">
                <th>Sub-Menu</th>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Item Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            { itemList.map((item) => (
              <tr className="" key={item._id}>
                <td>{item.menu.name}</td>
                <td>{item.name}</td>
                <td> {item.description}</td>
                <td> ${item.price}</td>
                <td className=''>
                <button value={item._id} onClick={handleAddItemToDisplayIndex}>Add Item</button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>

      :

      <div>Add item to display</div>

      }

    </div>
  );
}