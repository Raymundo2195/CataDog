import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks"
import "./BreedCard.css"

function DogBreedCard(props) {
  const { breed } = props

  const [images, setImages] = useLocalStorage(`${breed}-images`, [])
  
  useEffect(() => {
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
  }, breed)

  // Only show first image of each breed as there can be a lot that will flood the page
  const shownImages = images.slice(0,1)
  return (
    <div className="BreedCard-card red-border">
      <a>{breed}</a>
      <div>
        {shownImages.map(imageUrl => (
          <img src={imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default DogBreedCard;