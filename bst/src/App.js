
import './App.css';
import { BinarySearchTree } from './bst.js';
import { useState } from 'react';
function App() {
  const [msg, setMsg] = useState('');
  const [map, setMap] = useState(new Map());

  function insert() {
    //use useRef later
    let value = document.getElementById("num").value;
    let catagory = document.getElementById("catagory").value;
    document.getElementById("num").value = '';
    document.getElementById("catagory").value = '';
    
    const newBst = new BinarySearchTree();
    const newMap = new Map();
    if(map.get(catagory) === undefined){
      newBst.insert(value);  
      newMap.set(catagory, newBst);

      setMap(newMap);
      setMsg(catagory);
    }
    else{
      
      newBst.root = map.get(catagory).root;
      newBst.insert(value);
      newMap.set(catagory, newBst);
      
      setMap(newMap);
      setMsg(catagory);
    }
  };

  function del() {
    let value = document.getElementById("num").value;
    let catagory = document.getElementById("catagory").value;
    document.getElementById("num").value = '';
    document.getElementById("catagory").value = '';

    const newBst = new BinarySearchTree();
    const newMap = new Map();

    newBst.root = map.get(catagory).root;
    newBst.delete(value);
    newMap.set(catagory, newBst);

    setMap(newMap);
    setMsg(catagory);
  };

  function printAll(node){
    if(node === null) return null;
    return(
      <div>
        <div>{printAll(node.left)}</div> 
        <div>{node.value}</div>
        <div>{printAll(node.right)}</div>
      </div>
    );
  } 
  

  return (
    <div className="App">
      <form id="bstForm">
        <label htmlFor="number">Name:</label>
        <input type="text" id="num" name="number" required />  

        <label htmlFor="catagory">Catagory:</label>
        <input type="text" id="catagory" name="catagory" required /> 

        <button type="button" onClick={() => insert()}>Submit</button>
        <button type="button" onClick={() => del()}>delete</button>
      </form>

      <div style={{ margin: 20 }}>

      </div>
      <div style={{ margin: 20 }}>
        {map.get(msg) ? printAll(map.get(msg).root): null}
      </div>
    </div>
  );
}

export default App;
