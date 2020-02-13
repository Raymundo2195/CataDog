import React, { useState, useEffect } from "react";
import BreedCard from "./BreedCard"
import { useLocalStorage } from "./hooks"
import "./App.css";

function App() {
  const [dogs, setDogs] = useLocalStorage("dogsList", {})

  useEffect(() => {
    if (Object.keys(dogs).length) {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(apiData => {
          const { message, status } = apiData
  
          if (status === "success") {
            console.log(message)
            setDogs(message)
          } else {
            setDogs({})
          }
        })
    }
  }, [])
  
  const [filter, setFilter] = useState("")

  let visibleBreeds = []
  if (filter.length) {
    const filteredBreeds = filter.split(",")
    filteredBreeds.forEach(name => {
      if (dogs.hasOwnProperty(name)) {
        visibleBreeds.push(name)
      }
    })
  } else {
    visibleBreeds = Object.keys(dogs)
  }
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
        <div className="App-breed-list">
          {
            visibleBreeds.length ? 
              visibleBreeds.map(breed => (
                <BreedCard breed={breed} />
              ))
              : "No breeds were found matching your filter"
          }
        </div>
      </header>
    </div>
  );
}

export default App;
