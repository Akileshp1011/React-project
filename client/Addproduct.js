/* eslint-disable no-unused-vars */
import './Addproduct.css';
import { useState ,useEffect} from 'react';
import Axios from 'axios';

  
function App() {
  const[productName, setProductName]=useState('');
  const[description,setDescription]=useState('');

  //fetch data
  const[productList,setProductList]=useState([]);
  //Edit
  const[newProductName, setNewProductName]=useState('');

  useEffect(() => {
    Axios.get('http://localhost:3002/reads')
    .then((response) => {
      setProductList(response.data);
    })

  }, [])

  const addProductData = () =>{
    Axios.post("http://localhost:3002/insert",
    {
      productName:productName, 
      description:description
    });
  };

const UpdateProductData = (id) =>{
    Axios.put("http://localhost:3002/update", {
      id:id, newProductName:newProductName})
  }

  const DeleteData = (id) =>{
    Axios.delete(`http://localhost:3002/delete/${id}`)
      
  };


  return (
    <div className="App">
      <h1>CRUD - MERN</h1>
      <input type="text" placeholder="Product name" required 
      onChange={(event) => {setProductName(event.target.value)}}/>
      <br></br><br></br>
      <input type="text" placeholder="Description" required
     onChange={(event) => {setDescription(event.target.value)}}/>
      <br></br><br></br>
      <button onClick={addProductData}>Submit</button>
      <br></br><br></br>
      <table>
        <h3>Get Data from Database</h3>
        <tr>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
       
          {productList.map((val,key) => {
            return    <tr>
       <td>{val.productName}</td>
       <td>{val.description}</td>  
        <td>
        <input type="text" placeholder="update foodname"
        onChange={(event) => {
          setNewProductName(event.target.value);
        }}></input>
        <button onClick={()=> UpdateProductData(val._id)}>Edit</button>
        </td>
        <td>
          <button onClick={()=> DeleteData(val._id)}>Delete</button>
          </td>  
        
  
        </tr>
          })}
      </table>
    </div>
  );
}

export default App;