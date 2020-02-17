import React, { useState, useEffect } from "react";
import BreedList from "./BreedList"
import { getFilteredKeys } from "../helpers/appHelpers.js"
import { useLocalStorage } from "../hooks"
import "./styles/App.css";

function App() {
  const [dogs, setDogs] = useLocalStorage("dogsList", {})

  useEffect(() => {
    if (Object.keys(dogs).length === 0) {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(apiData => {
          const { message, status } = apiData
          if (status === "success") {
            setDogs(message)
          } else {
            setDogs({})
          }
        })
    }
  }, [dogs, setDogs])
  
  const [filter, setFilter] = useState("")
  const cleanedFilters = filter.length
    ? filter.split(",").map(filterEntry => filterEntry.trim().toLowerCase())
    : []
  const visibleBreeds = getFilteredKeys(dogs, cleanedFilters)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to CataDog, where you can browse your favorite dog breeds!
        </p>
        <label>
          Filter by breed:
          <input
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </label>
        <br />
        <BreedList breeds={visibleBreeds} />
      </header>
    </div>
  );
}

export default App;
