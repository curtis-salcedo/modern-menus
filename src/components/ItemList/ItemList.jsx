import ItemForm from '../ItemForm/ItemForm';
import ItemDetail from '../ItemDetail/ItemDetail';
import BusinessContext from '../../utilities/BusinessContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as menusAPI from '../../utilities/menus-api';

import Draggable, {DraggableCore} from 'react-draggable';

import './ItemList.css'

export default function ItemList({ user, menus }) {
  const { business, setBusiness } = useContext(BusinessContext)
  const [items, setItems] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [showItemForm, setShowItemForm] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      console.log(menus)
      if (menus) {
        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        setItems(userItems)
      }
    }
    fetchItems()
  }, [menus])


  function handleItemDetail(itemId) {
    setSelectedItem(itemId);
    navigate(`/items/${itemId}`)
  }

  function handleAddItemButton(itemId) {
    setShowItemForm(true)
  }

  function handleAddItemClose(itemId) {
    setShowItemForm(false)
  }

  return (
    <div className="ItemListContainer">
      <div>Items List Area</div>


      { items ?
      <div className="ItemListItems">
      <button className="AddItemButton" onClick={handleAddItemButton}> Quick Add Item</button>

      { showItemForm && (
        <div><ItemForm user={user} menus={menus} handleAddItemClose={handleAddItemClose} /></div>
      )}

        <div className="ItemContainer">
          <table className="TableContainer">
            <thead>
              <tr className="ItemRow">
                <th>Item Category</th>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Item Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            { items.map((item) => (
              <tr className="ItemRow" key={item._id}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td> {item.description}</td>
                <td> ${item.price}</td>
                <td>
                <button className="ItemEditButton" onClick={() => handleItemDetail(item._id)}>Edit</button>
              {/* <button className="ItemListButton" onClick={() => handleItemDetail(item._id)}>
              {item.name}
            </button> */}
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      :

      <div>Add items to view</div>

      }

    </div>
  );
}