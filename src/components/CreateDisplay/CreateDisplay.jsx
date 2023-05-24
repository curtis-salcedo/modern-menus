import ItemList from '../ItemList/ItemList';
import BusinessContext from '../../utilities/BusinessContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as menusAPI from '../../utilities/menus-api';
import Draggable, {DraggableCore} from 'react-draggable';

export default function PreviewPage({ items, setItems, menus, user }) {
  const { business, setBusiness } = useContext(BusinessContext)
  const navigate = useNavigate();
  console.log(business, user)
  // Fetch items that match logged in user
  useEffect(() => {
    const fetchItems = async () => {
      if (menus) {
        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        console.log(userItems)
        setItems(userItems)
      }
    }
    fetchItems()
    console.log(items)
  }, [business])

  return (
    <div className="CreateDisplayContainer">
      { items ?
          <table className="TableContainer">
            <thead>
              <tr className="ItemRow">
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Item Price</th>
              </tr>
            </thead>
            <tbody>
            { items.map((item) => (
              <tr className="ItemRow" key={item._id}>
                <td>{item.name}</td>
                <td> {item.description}</td>
                <td> ${item.price}</td>
              </tr>
              ))}
            </tbody>
          </table>
      :
      <div>Add items to view</div>
      }
        <button className="GenerateMenuButton">Generate Menu</button>
    </div>
  );
}