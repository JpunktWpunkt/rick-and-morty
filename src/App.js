import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharGrid from './components/CharGrid';
import Search from './components/Search';




const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(' ')

  useEffect(() => {
    const fetchItems = async () => {
    const result = await axios(`https://rickandmortyapi.com/api/character?name=${query}`)


      console.log(result.data.results)
      setItems(result.data.results)
      setIsLoading(false)
  }
  fetchItems()
  }, [query])
  return (
    <div className="container">
    <Header />
      <Search getQuery={(searchTerm) => setQuery(searchTerm)}  />
      <CharGrid isLoading={isLoading} items={items} />

    </div>
  );
}

export default App;
