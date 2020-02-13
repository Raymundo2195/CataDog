import React, { useState, useEffect } from "react";
import BreedCard from "./BreedCard"
import { useLocalStorage } from "./hooks"
import "./App.css";

function App() {
  const [dogs, setDogs] = useLocalStorage("dogsList", [])

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(apiData => {
        const { message, status } = apiData

        if (status === "success") {
          const primaryBreeds = Object.keys(message)
          console.log(primaryBreeds)
          setDogs(primaryBreeds)
        } else {
          setDogs([])
        }
      })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to CataDog, where you can browse your favorite dog breeds!
        </p>
        <div className="App-breed-list">
          {
            dogs.map(breed => (
              <BreedCard breed={breed} />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
