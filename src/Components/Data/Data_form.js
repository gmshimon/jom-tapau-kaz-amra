import React from 'react'

const Data_form = () => {
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
                value=''
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
                name='foodName'
                value=''
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
                value=''
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
                value=''
              />
            </td>
          </tr>
        </table>
        <br/>
        <button>Add Food</button>
      </form>
    </div>
  )
}

export default Data_form
