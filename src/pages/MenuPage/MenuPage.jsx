// import { checkToken } from '../../utilities/users-service';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    // const expDate = await checkToken();
    alert('clicked')
  }
  
  return (
    <>
      <h1>Menu View Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}