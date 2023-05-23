import ItemForm from '../ItemForm/ItemForm'
import ItemDetail from '../ItemDetail/ItemDetail'
import BusinessContext from '../../utilities/BusinessContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api'
import * as menusAPI from '../../utilities/menus-api'

import './ItemList.css'

export default function ItemList({ user, menus }) {
  const { business, setBusiness } = useContext(BusinessContext)
  const [items, setItems] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const navigate = useNavigate();
  // Need to bring in menus

  useEffect(() => {
    const fetchItems = async () => {
      if (menus) {
        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        setItems(userItems)
      }
    }
    fetchItems()
  }, [])


  function handleItemDetail(itemId) {
    setSelectedItem(itemId);
    navigate(`/items/${itemId}`)
  }


  return (
    <div className="ItemListContainer">
      <div>Items List Area Below</div>
      { items ?
      <div className="ItemListItems">
        { items.map((item) => (
          <div key={item._id}>
            <div>{item.name}</div>
              <button onClick={() => handleItemDetail(item._id)}>View Details</button>
          </div>
          ))}
          </div>
        :
        <div>No Items Yet</div>
        }
      <div><ItemForm user={user} menus={menus} /></div>
    </div>
  );
}