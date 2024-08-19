import { useState } from "react"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"

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
  return (
    <div className="h-full">
      <Header title="grocery list"/>
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
