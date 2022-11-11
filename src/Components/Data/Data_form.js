import React from 'react'
import { useRef } from 'react';

const Data_form = () => {
  const nameRef = useRef();
  const priceRef =useRef();
  const imgRef =useRef();
  const catRef =useRef();
    const HandleAdd = e =>{
    
       e.preventDefault();
       const name = nameRef.current.value;
       const price= priceRef.current.value;
       const imgURL= imgRef.current.value;
       const category= catRef.current.value;

       const foodCollection={
        name, price,imgURL,category
       }

       fetch('http://localhost:5000/food', {

        method: "POST",
        headers: {
          "content-type": "application/json"

        },
        body: JSON.stringify(foodCollection)

       }).then(res=>res.json()).then(data=>{
        console.log("this is data mind it",data);
        alert("Data added successfully!");
        e.target.reset();
       })

     
    }
  return (
    <div>
      <h1>Data insertion form for Jom Tapau</h1>
      <form onSubmit={HandleAdd} style={{ marginTop: '50px', marginLeft: '100px' }}>
        <table>
          <tr>
            <td align='right'>
              <label for='foodName'>Food Name:</label>
            </td>
            <td>
              <input ref={nameRef}
                style={{ width: '300px' }}
                type='text'
                name='foodName'
              />
            </td>
          </tr>
          <tr align='right'>
            <td>
              <label for='price'>Price</label>
            </td>
            <td>
              <input ref={priceRef}
                style={{ width: '300px' }}
                type='text'
                name='price'
              />
            </td>
          </tr>
          <tr align='right'>
            <td>
              <label for='image'>Image URL</label>
            </td>
            <td>
              <input ref={imgRef}
                style={{ width: '300px' }}
                type='text'
                name='image'
              />
            </td>
          </tr>
          <tr align='right'>
            <td>
              <label for='category'>Category</label>
            </td>
            <td>
           
              <select ref={catRef}  style={{width:"300px"}} name="Category" id="">
                <option value="Lunch">Lunch</option>
                <option value="BreakFast">BreakFast</option>
                <option value="Drinks">Drinks</option>
              </select>
            </td>
          </tr>
        </table>
        <br/>
        <button onClick={HandleAdd}>Add Food</button>
      </form>
      <p>hello how are you</p>
    </div>
  )
}

export default Data_form
