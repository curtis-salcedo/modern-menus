// import { Component } from 'react';
// import { signUp } from '../../utilities/users-service';

// export default function BusinessSignUpForm(user) {
//   const [form, setForm] = useState({
//     name: "",

//   })
//   console.log(user)

//   handleChangeBusiness = (evt) => {
//     setForm({ ...user, [evt.target]: evt.target.value })
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {

//     } catch {
    
//     }
//   };

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleChange()}>
//           <label>Business</label>
//           <input type="text" name="name" value={handleChangeBusiness()} onChange={this.handleChange} required />
//           <label>City</label>
//           <input type="text" name="city" value={handleChange()} onChange={this.handleChange} required />
//           <label>State</label>
//           <input type="text" name="state" value={handleChange()} onChange={this.handleChange} required />
//           <label>Zip Code</label>
//           <input type="text" name="zip" value={handleChange()} onChange={this.handleChange} required />
//           <button type="submit" disabled>Add Location</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{this.state.error}</p>
//     </div>
//   );
// }
