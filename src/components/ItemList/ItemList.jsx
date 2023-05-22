import ItemForm from '../ItemForm/ItemForm'
import BusinessContext from '../../utilities/BusinessContext';
import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api'

export default function ItemList({ user, menus }) {
  const { business } = useContext(BusinessContext)
  const [items, setItems] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

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

  function handleEditItem(item) {
    setSelectedItem(item)
  }

  return (
    <div className="ItemList">
      <div>Items List Area Below</div>
      { items ?
      <div className="ItemListItems">
        { items.map((item) => (
          <div key={item._id}>
            <Link to={`/items/${item._id}`}>
              <div>{item.name}</div>
            </Link>
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