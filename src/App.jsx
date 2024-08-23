import { useState, useEffect } from "react"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import AddItem from "./Components/AddItem/AddItem"
import Search from "./Components/Search/Search"

function App() {
  const API_URL = 'http://localhost:3500/items'
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        console.log("listItems", listItems);
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, [])
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
      <main>
        {isLoading && <p className='text-teal-500 text-center mt-6 text-xl font-light font-moderustic'>Loading Items....</p>}
        {fetchError && <p className='text-red-500 text-center mt-6 text-xl font-light font-moderustic'>{`fetchError :${fetchError}`}</p>}
        {
          !fetchError && !isLoading && <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  )
}

export default App
