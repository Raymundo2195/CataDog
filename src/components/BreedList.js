import React from "react"
import BreedCard from "./BreedCard"

function BreedList(props) {
  const { breeds } = props

  return (
    <div className="App-breed-list">
      {
        breeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))
      }
    </div>
  )
}

export default BreedList