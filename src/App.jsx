import { useState } from "react"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import AddItem from "./Components/AddItem/AddItem"

function App() {
  const [items,setItems] = useState([
    {
        id:1,
        checked : true,
        item :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quasi!"
    },
    {
        id:2,
        checked : false,
        item :"Item 02"
    },
    {
        id:3,
        checked : false,
        item :"Item 03"
    },
])
const [newItem,setNewItem] = useState('')
const addItem = (item)=>{
  const id = items.length ? items[items.length -1].id+1:1;
  const myNewItem={id,checked:false,item}
  const listItem =[...items,myNewItem]
  setItems(listItem)
  localStorage.setItem("grocery",JSON.stringify(listItem))
}
const handleCheck = (id)=>{
    const listItem =items.map((item)=> item.id === id ? {...item,checked :!item.checked}:item)
    setItems(listItem)
    localStorage.setItem("grocery",JSON.stringify(listItem))
}
const handleDelete =(id)=>{
   const listItem =items.filter((item)=> item.id !== id)
   setItems(listItem)
   localStorage.setItem("grocery",JSON.stringify(listItem))
}
const handleSubmit =(e)=>{
  e.preventDefault()
  if(!newItem) return;
 addItem(newItem)
  setNewItem("")
}
  return (
    <div className="h-full">
      <Header title="grocery list"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  )
}

export default App
