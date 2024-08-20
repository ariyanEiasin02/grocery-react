import { useState,useEffect } from "react"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import AddItem from "./Components/AddItem/AddItem"
import Search from "./Components/Search/Search"

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("grocery")) || [])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
 
  useEffect(()=>{
    localStorage.setItem("grocery", JSON.stringify(items))
      },[items])
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItem = [...items, myNewItem]
    setItems(listItem)
  }
  const handleCheck = (id) => {
    const listItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItem)
  }
  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id)
    setItems(listItem)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem)
    setNewItem("")
  }
  return (
    <div className="h-full">
      <Header title="grocery list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
