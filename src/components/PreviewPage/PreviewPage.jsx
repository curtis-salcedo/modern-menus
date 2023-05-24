import ItemForm from '../ItemForm/ItemForm';
import ItemDetail from '../ItemDetail/ItemDetail';
import MenuForm from '../MenuForm/MenuForm';
import PreviewPage from '../PreviewPage/PreviewPage';
import BusinessContext from '../../utilities/BusinessContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as menusAPI from '../../utilities/menus-api';
export default function CreateDisplay({ user }) {
  
  const { business, setBusiness } = useContext(BusinessContext)
  const [ sort, setSort ] = useState('name')
  const [ filter, setFilter ] = useState('')
  const [ items, setItems ] = useState(null)
  const navigate = useNavigate();


  // Fetch items that match logged in user
  useEffect(() => {
    const fetchItems = async () => {
      if (business) {
        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        setItems(userItems)
      }
    }
    fetchItems()
  }, [])

  

  return (
    <div className="PreviewContainer">
      PREVIEW PAGE AREA
      <button className="GenerateMenuButton">Exit Preview</button>
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

    </div>
  );
}