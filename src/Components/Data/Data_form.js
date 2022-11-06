import React from 'react'

const Data_form = () => {
    const HandleAdd = () =>{
        console.log('Hello world');
    }
  return (
    <div>
      <h1>Data insertion form for Jom Tapau</h1>
      <form style={{ marginTop: '50px', marginLeft: '100px' }}>
        <table>
          <tr>
            <td align='right'>
              <label for='foodName'>Food Name:</label>
            </td>
            <td>
              <input
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
              <input
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
              <input
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
              <input
                style={{ width: '300px' }}
                type='text'
                name='category'
              />
            </td>
          </tr>
        </table>
        <br/>
        <button onClick={HandleAdd}>Add Food</button>
      </form>
    </div>
  )
}

export default Data_form
