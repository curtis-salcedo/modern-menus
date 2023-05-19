import ItemList from '../ItemList/ItemList'
import ItemForm from '../ItemForm/ItemForm'
import './MenuList.css'

export default function MenuList(  ) {
  return (
    <div className="MenuList">
      <div>Menu Selection Area</div>
      <div>Menu Items</div>
      <div><ItemList /></div>
      <div><ItemForm /></div>
    </div>
  );
}