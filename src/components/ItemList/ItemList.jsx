import ItemForm from '../ItemForm/ItemForm'


export default function ItemList({ user, menu, business }) {

  return (
    <div className="ItemList">
      <div>Items Listed Here Area</div>
      <div>Fake Item 1</div>
      <div><ItemForm user={user} menu={menu} business={business} /></div>
    </div>
  );
}