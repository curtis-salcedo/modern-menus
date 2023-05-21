import ItemForm from '../ItemForm/ItemForm'
import BusinessContext from '../../utilities/BusinessContext';
import { useContext } from 'react';

export default function ItemList({ user, menus }) {

  return (
    <div className="ItemList">
      <div>Items Listed Here Area</div>
      <div>Fake Item 1</div>
      <div><ItemForm user={user} menus={menus} /></div>
    </div>
  );
}