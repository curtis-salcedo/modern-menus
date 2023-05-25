import ItemForm from '../ItemForm/ItemForm';
import ItemDetail from '../ItemDetail/ItemDetail';
import MenuForm from '../MenuForm/MenuForm';
import BusinessContext from '../../utilities/BusinessContext';
import CreateDisplay from '../CreateDisplay/CreateDisplay';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as menusAPI from '../../utilities/menus-api';

import Draggable, {DraggableCore} from 'react-draggable';

import './ItemList.css'

export default function ItemList({ user, menus }) {
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
  
    function handleShowMenuForm() {
      setShowMenuForm(true)
    }
  
    function handleCloseMenuForm() {
      setShowMenuForm(false)
    }

  return (
    <div className="ItemListContainer">

      { items ?
      <div className="ItemListItems">

      { menus ?
      <div className="MenuListButtonContainer">
        <div className="MenuContainerItems">

        <div className="MenuListMenuTitle">Your Created Sub-Menus</div>
        {/* <button className="MenuListButton">ALL</button> */}
        {menus.map((m) => (
          <div key={m._id}>
            <button className="MenuListButton" onClick={() => handleMenuDetail(m._id)}>{m.name}</button>
          </div>
          ))}
          </div>
      </div>
        :
        <div>No Menus Yet</div>
        }
        <div>
          <button className="AddMenuButton" onClick={handleShowMenuForm}>Quick Add Sub-Menu</button>
        { showMenuForm && (
          <div className="ShowMenuFormButton"><MenuForm user={user} handleCloseMenuForm={handleCloseMenuForm}  /></div>
        )}
          <button className="AddItemButton" onClick={handleAddItemButton}>Quick Add Item</button>
        </div>


      { showItemForm && (
        <div><ItemForm user={user} menus={menus} handleAddItemClose={handleAddItemClose} /></div>
      )}

        <div className="ItemContainer">
          <table className="TableContainer">
            <thead>
              <tr className="ItemRow">
                <th>Sub-Menu</th>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Item Price</th>

              </tr>
            </thead>
            <tbody>
            { items.map((item) => (
              <tr className="ItemRow" key={item._id}>
                <td>{item.menu.name}</td>
                <td>{item.name}</td>
                <td> {item.description}</td>
                <td> ${item.price}</td>
                <div className='ItemTableEditCell'>
                  <button className="ItemEditButton" onClick={() => handleItemDetail(item._id)}>Edit</button>

              {/* <button className="ItemListButton" onClick={() => handleItemDetail(item._id)}>
              {item.name}
            </button> */}
                </div>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      :
      <div>Add items to view</div>
      }
      <CreateDisplay items={items} setItems={setItems} menus={menus} user={user} />
    </div>
  );
}