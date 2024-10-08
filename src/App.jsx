import { useState, useEffect } from "react"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import AddItem from "./Components/AddItem/AddItem"
import Search from "./Components/Search/Search"
import apiRequest from "./ApiRequest"

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
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItem = [...items, myNewItem]
    setItems(listItem)

    const postOptions ={
      method : "POST",
      headers :{
        "Content-Type" : "Application/json"
      },
      body:JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
  }
  const handleCheck = async (id) => {
    const listItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItem)

    const myItem = listItem.filter((item) => item.id === id)
    const updateOptions ={
      method : "PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({checked: myItem[0].checked})
    }
    const resUrl =`${API_URL}/${id}`
    const result = await apiRequest(resUrl,updateOptions)
    if(result) setFetchError(result)
  }
  const handleDelete = async (id) => {
    const listItem = items.filter((item) => item.id !== id)
    setItems(listItem)

    const deleteOptions ={method : "DELETE" }
     const resUrl =`${API_URL}/${id}`
    const result = await apiRequest(resUrl,deleteOptions)
    if(result) setFetchError(result)
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
