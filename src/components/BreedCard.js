import React, { useEffect } from "react";
import { useLocalStorage } from "../hooks"
import "./styles/BreedCard.css"

function DogBreedCard(props) {
  const { breed } = props

  const [images, setImages] = useLocalStorage(`${breed}-images`, [])
  
  useEffect(() => {
    if (images.length === 0) {
      fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(apiData => {
          const { message, status } = apiData
          if (status === "success") {
            setImages(message)
          } else {
            setImages([])
          }
        })
    }
  }, [breed, images, setImages])

  // Only show first image of each breed as there can be a lot that will flood the page
  const shownImages = images.slice(0,1)
  return (
    <div className="BreedCard-card">
      <p>{breed}</p>
      <div>
        {shownImages.map((imageUrl, index) => (
          <img src={imageUrl} alt={`${breed}-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default DogBreedCard;